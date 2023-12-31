/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { TransferNFT, TransferNFTInterface } from '../TransferNFT'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
] as const

export class TransferNFT__factory {
  static readonly abi = _abi
  static createInterface(): TransferNFTInterface {
    return new utils.Interface(_abi) as TransferNFTInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TransferNFT {
    return new Contract(address, _abi, signerOrProvider) as TransferNFT
  }
}
