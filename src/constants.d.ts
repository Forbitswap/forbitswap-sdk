import JSBI from 'jsbi'
export declare type BigintIsh = JSBI | bigint | string
export declare enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}
export declare enum TradeType {
  EXACT_INPUT = 0,
  EXACT_OUTPUT = 1
}
export declare enum Rounding {
  ROUND_DOWN = 0,
  ROUND_HALF_UP = 1,
  ROUND_UP = 2
}

// export declare const FACTORY_ADDRESS = "0x44b7256d25613855Fdaaf4C788CF8CB02B7A3717";
// export declare const INIT_CODE_HASH = "0xd8ee896fc63070b0e43b4f7646fa27e8336829eaf3e40c8f5aab132bd5af0d96";

export declare const FACTORY_ADDRESS = '0x22a73c6774A0FC1D39F0084a112717BEeBDe53fF'
export declare const INIT_CODE_HASH = '0xefb407034238b4d76a67e1c755fb858d112c6613adbf91eb6a0db6f6d0039ba3'

export declare const MINIMUM_LIQUIDITY: JSBI
export declare const ZERO: JSBI
export declare const ONE: JSBI
export declare const TWO: JSBI
export declare const THREE: JSBI
export declare const FIVE: JSBI
export declare const TEN: JSBI
export declare const _100: JSBI
export declare const _997: JSBI
export declare const _1000: JSBI
export declare enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}
export declare const SOLIDITY_TYPE_MAXIMA: {
  uint8: JSBI
  uint256: JSBI
}
