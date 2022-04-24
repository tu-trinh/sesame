#!/usr/bin/python3

from brownie import Token, accounts

def main():

    acct = accounts.load('testac')

    return Token.deploy("Test Token", "TST", 18, 1e21, {'from': acct})