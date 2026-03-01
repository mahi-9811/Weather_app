# Start from official Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy and install dependencies first (faster builds)
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy rest of the code
COPY . .

# Run Flask
CMD ["python", "app.py"]
