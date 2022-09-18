# Vue Loan Calculator

## How to use:

The app is meant to help the user keep track of their loans and debts (where loans mean the money other people owe them and debts mean the money they owe to others), which are displayed on two separated lists.

Every entry contains three informations:
- Name - text value with maximum lenght of 40 characters (must contain letters),
- Amount - numeric value between 0.01 and 99999.99,
- Date - date and hour of entry's addition (generated automaticly).

There are also counters to show total amounts of loans and debts and their balance.

All user data is currently stored in localStorage, however there is planned the backend version of the app in the future for easier way to synchronize data between user's devices.

## Live demo: 
https://piotrullllo.github.io/vue-loan-calculator/

## Changelog:
#### Version 1.0.0:
- Added basic app functionality