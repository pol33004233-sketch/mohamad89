import ccxt
import pandas as pd
import numpy as np
import asyncio
from telegram import Bot
from multiprocessing import Pool
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# تنظیمات اولیه
TELEGRAM_TOKEN = "7675048746:AAFsNx5kEdz8nNa9boMTPnyHo9lq1An0h-Y"
CHAT_ID = "5890478023"
bot = Bot(token=TELEGRAM_TOKEN)
exchange = ccxt.coinex({
    "rateLimit": 1200,
    "enableRateLimit": True,
})

# ارسال پیام به تلگرام
def send_signal(symbol, signal_type, price, stop_loss, take_profit, confidence):
    message = (
        f"🔔 سیگنال {signal_type.upper()} برای {symbol}\n"
        f"💰 قیمت: {price}\n"
        f"🎯 حد سود: {take_profit}\n"
        f"🚨 حد ضرر: {stop_loss}\n"
        f"📈 اعتماد مدل: {confidence:.2f}%\n"
        "📊 تحلیل تکمیلی را بررسی کنید!"
    )
    bot.send_message(chat_id=CHAT_ID, text=message)

# آماده‌سازی داده‌ها برای LSTM
def prepare_lstm_data(data, look_back=60):
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data.values.reshape(-1, 1))
    X, y = [], []
    for i in range(look_back, len(scaled_data)):
        X.append(scaled_data[i - look_back:i, 0])
        y.append(scaled_data[i, 0])
    X, y = np.array(X), np.array(y)
    X = np.reshape(X, (X.shape[0], X.shape[1], 1))
    return X, y, scaler

# ساخت مدل LSTM
def build_lstm_model():
    model = Sequential([
        LSTM(units=50, return_sequences=True, input_shape=(60, 1)),
        Dropout(0.2),
        LSTM(units=50, return_sequences=False),
        Dropout(0.2),
        Dense(units=1)
    ])
    model.compile(optimizer='adam', loss='mean_squared_error')
    return model

# تحلیل و پیش‌بینی با LSTM
def analyze_with_lstm(symbol):
    ohlcv = exchange.fetch_ohlcv(symbol, timeframe="1h", limit=100)
    df = pd.DataFrame(ohlcv, columns=["timestamp", "open", "high", "low", "close", "volume"])
    X, y, scaler = prepare_lstm_data(df["close"])
    model = build_lstm_model()
    model.fit(X, y, epochs=10, batch_size=32, verbose=0)

    last_data = df["close"].values[-60:]
    last_scaled = scaler.transform(last_data.reshape(-1, 1))
    last_input = np.reshape(last_scaled, (1, last_scaled.shape[0], 1))
    prediction = model.predict(last_input)
    predicted_price = scaler.inverse_transform(prediction)[0][0]

    current_price = df["close"].iloc[-1]
    confidence = abs((predicted_price - current_price) / current_price) * 100
    return predicted_price, confidence

# استراتژی سیگنال‌دهی
def generate_signal(symbol):
    try:
        predicted_price, confidence = analyze_with_lstm(symbol)
        ohlcv = exchange.fetch_ohlcv(symbol, timeframe="1h", limit=1)
        current_price = ohlcv[-1][4]

        if predicted_price > current_price * 1.02:  # 2% رشد
            send_signal(symbol, "buy", current_price, current_price * 0.98, current_price * 1.05, confidence)

        elif predicted_price < current_price * 0.98:  # 2% کاهش
            send_signal(symbol, "sell", current_price, current_price * 1.02, current_price * 0.95, confidence)
    except Exception as e:
        print(f"Error analyzing {symbol}: {e}")

# اسکن تمام مارکت‌ها
async def scan_all_markets():
    markets = exchange.load_markets()
    with Pool(10) as pool:
        pool.map(generate_signal, [symbol for symbol in markets if "USDT" in symbol])

# اجرای اصلی
if name == "main":
    while True:
        asyncio.run(scan_all_markets())
        print("⏳ اسکن مجدد در حال انجام...")