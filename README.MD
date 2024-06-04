# Home Price Prediction in Bangalore

This project aims to predict home prices in Bangalore using machine learning techniques. The backend is developed using Flask, and the frontend is built with React. The model is trained using data preprocessing and feature engineering techniques to ensure accurate predictions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Data](#data)
- [Model Training](#model-training)
- [Backend](#backend)
- [Frontend](#frontend)
- [Setup](#setup)
- [Usage](#usage)

## Overview

This project utilizes historical home price data to predict future prices based on various features such as location, size (square feet), number of bedrooms (BHK), and number of bathrooms.

## Features

- Data preprocessing and cleaning
- Feature engineering
- Multiple machine learning models (Linear Regression, Lasso Regression, Decision Tree)
- Model selection using GridSearchCV
- Flask API for backend
- React frontend for user interaction

## Data

The data used in this project is from the Bengaluru House Data dataset. The preprocessing steps include:

1. Dropping unnecessary columns
2. Handling missing values
3. Converting non-numeric values to numeric
4. Removing outliers
5. Feature scaling
6. Encoding categorical variables

## Model Training

The following models were trained and evaluated:

- Linear Regression
- Lasso Regression
- Decision Tree Regressor

The model with the best performance was selected for deployment.

## Backend

The backend is built using Flask and provides two main endpoints:

1. `/api/get_location_names`: Returns a list of locations for the dropdown in the frontend.
2. `/api/predict_home_price`: Accepts inputs for square feet, location, BHK, and bathrooms, and returns the predicted price.

## Frontend

The frontend is built using React and provides a user-friendly interface for inputting the required features and displaying the predicted price. It allows users to enter the area, select the number of bedrooms (BHK), bathrooms, and location, and then estimate the price of the house.

## Setup

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sochoav1/RealStatePrediction.git
   cd home-price-prediction

pip install -r requirements.txt

cd frontend
npm install

python server.py

cd frontend
npm start

## Usage
Open your browser and navigate to http://localhost:3000.
Enter the required details such as area, BHK, bathrooms, and location.
Click on the "Estimate Price" button to get the predicted price of the house.
