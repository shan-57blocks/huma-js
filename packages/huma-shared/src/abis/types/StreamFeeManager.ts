/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common'

export declare namespace BaseStructs {
  export type CreditRecordStruct = {
    unbilledPrincipal: PromiseOrValue<BigNumberish>
    dueDate: PromiseOrValue<BigNumberish>
    correction: PromiseOrValue<BigNumberish>
    totalDue: PromiseOrValue<BigNumberish>
    feesAndInterestDue: PromiseOrValue<BigNumberish>
    missedPeriods: PromiseOrValue<BigNumberish>
    remainingPeriods: PromiseOrValue<BigNumberish>
    state: PromiseOrValue<BigNumberish>
  }

  export type CreditRecordStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
  ] & {
    unbilledPrincipal: BigNumber
    dueDate: BigNumber
    correction: BigNumber
    totalDue: BigNumber
    feesAndInterestDue: BigNumber
    missedPeriods: number
    remainingPeriods: number
    state: number
  }

  export type CreditRecordStaticStruct = {
    creditLimit: PromiseOrValue<BigNumberish>
    aprInBps: PromiseOrValue<BigNumberish>
    intervalInDays: PromiseOrValue<BigNumberish>
    defaultAmount: PromiseOrValue<BigNumberish>
  }

  export type CreditRecordStaticStructOutput = [
    BigNumber,
    number,
    number,
    BigNumber,
  ] & {
    creditLimit: BigNumber
    aprInBps: number
    intervalInDays: number
    defaultAmount: BigNumber
  }
}

export interface StreamFeeManagerInterface extends utils.Interface {
  functions: {
    'calcCorrection(uint256,uint256,uint256)': FunctionFragment
    'calcFrontLoadingFee(uint256)': FunctionFragment
    'calcLateFee(uint256,uint256,uint256)': FunctionFragment
    'deleteTempCreditRecordStatic()': FunctionFragment
    'distBorrowingAmount(uint256)': FunctionFragment
    'frontLoadingFeeBps()': FunctionFragment
    'frontLoadingFeeFlat()': FunctionFragment
    'getDueInfo((uint96,uint64,int96,uint96,uint96,uint16,uint16,uint8),(uint96,uint16,uint16,uint96))': FunctionFragment
    'getFees()': FunctionFragment
    'lateFeeBps()': FunctionFragment
    'lateFeeFlat()': FunctionFragment
    'membershipFee()': FunctionFragment
    'minPrincipalRateInBps()': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setFees(uint256,uint256,uint256,uint256,uint256)': FunctionFragment
    'setMinPrincipalRateInBps(uint256)': FunctionFragment
    'setTempCreditRecordStatic((uint96,uint16,uint16,uint96))': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'calcCorrection'
      | 'calcFrontLoadingFee'
      | 'calcLateFee'
      | 'deleteTempCreditRecordStatic'
      | 'distBorrowingAmount'
      | 'frontLoadingFeeBps'
      | 'frontLoadingFeeFlat'
      | 'getDueInfo'
      | 'getFees'
      | 'lateFeeBps'
      | 'lateFeeFlat'
      | 'membershipFee'
      | 'minPrincipalRateInBps'
      | 'owner'
      | 'renounceOwnership'
      | 'setFees'
      | 'setMinPrincipalRateInBps'
      | 'setTempCreditRecordStatic'
      | 'transferOwnership',
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'calcCorrection',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'calcFrontLoadingFee',
    values: [PromiseOrValue<BigNumberish>],
  ): string
  encodeFunctionData(
    functionFragment: 'calcLateFee',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'deleteTempCreditRecordStatic',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'distBorrowingAmount',
    values: [PromiseOrValue<BigNumberish>],
  ): string
  encodeFunctionData(
    functionFragment: 'frontLoadingFeeBps',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'frontLoadingFeeFlat',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getDueInfo',
    values: [
      BaseStructs.CreditRecordStruct,
      BaseStructs.CreditRecordStaticStruct,
    ],
  ): string
  encodeFunctionData(functionFragment: 'getFees', values?: undefined): string
  encodeFunctionData(functionFragment: 'lateFeeBps', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'lateFeeFlat',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'membershipFee',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'minPrincipalRateInBps',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'setFees',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'setMinPrincipalRateInBps',
    values: [PromiseOrValue<BigNumberish>],
  ): string
  encodeFunctionData(
    functionFragment: 'setTempCreditRecordStatic',
    values: [BaseStructs.CreditRecordStaticStruct],
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>],
  ): string

  decodeFunctionResult(
    functionFragment: 'calcCorrection',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'calcFrontLoadingFee',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'calcLateFee', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'deleteTempCreditRecordStatic',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'distBorrowingAmount',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'frontLoadingFeeBps',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'frontLoadingFeeFlat',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'getDueInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getFees', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lateFeeBps', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lateFeeFlat', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'membershipFee',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'minPrincipalRateInBps',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'setFees', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setMinPrincipalRateInBps',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setTempCreditRecordStatic',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result

  events: {
    'FeeChanged(uint256,uint256,uint256,uint256,uint256)': EventFragment
    'MinPrincipalRateChanged(uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'FeeChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'MinPrincipalRateChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export interface FeeChangedEventObject {
  frontLoandingFeeFlat: BigNumber
  frontLoadingFeeBps: BigNumber
  lateFeeFlat: BigNumber
  lateFeeBps: BigNumber
  membershipFee: BigNumber
}
export type FeeChangedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  FeeChangedEventObject
>

export type FeeChangedEventFilter = TypedEventFilter<FeeChangedEvent>

export interface MinPrincipalRateChangedEventObject {
  minPrincipalRateInBps: BigNumber
}
export type MinPrincipalRateChangedEvent = TypedEvent<
  [BigNumber],
  MinPrincipalRateChangedEventObject
>

export type MinPrincipalRateChangedEventFilter =
  TypedEventFilter<MinPrincipalRateChangedEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>

export interface StreamFeeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: StreamFeeManagerInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    calcCorrection(
      dueDate: PromiseOrValue<BigNumberish>,
      aprInBps: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { correction: BigNumber }>

    calcFrontLoadingFee(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { fees: BigNumber }>

    calcLateFee(
      dueDate: PromiseOrValue<BigNumberish>,
      totalDue: PromiseOrValue<BigNumberish>,
      totalBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { fees: BigNumber }>

    deleteTempCreditRecordStatic(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    distBorrowingAmount(
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        amtToBorrower: BigNumber
        platformFees: BigNumber
      }
    >

    frontLoadingFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>

    frontLoadingFeeFlat(overrides?: CallOverrides): Promise<[BigNumber]>

    getDueInfo(
      _cr: BaseStructs.CreditRecordStruct,
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        periodsPassed: BigNumber
        feesAndInterestDue: BigNumber
        totalDue: BigNumber
        unbilledPrincipal: BigNumber
        totalCharges: BigNumber
      }
    >

    getFees(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _frontLoadingFeeFlat: BigNumber
        _frontLoadingFeeBps: BigNumber
        _lateFeeFlat: BigNumber
        _lateFeeBps: BigNumber
        _membershipFee: BigNumber
      }
    >

    lateFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>

    lateFeeFlat(overrides?: CallOverrides): Promise<[BigNumber]>

    membershipFee(overrides?: CallOverrides): Promise<[BigNumber]>

    minPrincipalRateInBps(overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setFees(
      _frontLoadingFeeFlat: PromiseOrValue<BigNumberish>,
      _frontLoadingFeeBps: PromiseOrValue<BigNumberish>,
      _lateFeeFlat: PromiseOrValue<BigNumberish>,
      _lateFeeBps: PromiseOrValue<BigNumberish>,
      _membershipFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setMinPrincipalRateInBps(
      _minPrincipalRateInBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setTempCreditRecordStatic(
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>
  }

  calcCorrection(
    dueDate: PromiseOrValue<BigNumberish>,
    aprInBps: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  calcFrontLoadingFee(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  calcLateFee(
    dueDate: PromiseOrValue<BigNumberish>,
    totalDue: PromiseOrValue<BigNumberish>,
    totalBalance: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  deleteTempCreditRecordStatic(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  distBorrowingAmount(
    borrowAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      amtToBorrower: BigNumber
      platformFees: BigNumber
    }
  >

  frontLoadingFeeBps(overrides?: CallOverrides): Promise<BigNumber>

  frontLoadingFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

  getDueInfo(
    _cr: BaseStructs.CreditRecordStruct,
    _crStatic: BaseStructs.CreditRecordStaticStruct,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      periodsPassed: BigNumber
      feesAndInterestDue: BigNumber
      totalDue: BigNumber
      unbilledPrincipal: BigNumber
      totalCharges: BigNumber
    }
  >

  getFees(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _frontLoadingFeeFlat: BigNumber
      _frontLoadingFeeBps: BigNumber
      _lateFeeFlat: BigNumber
      _lateFeeBps: BigNumber
      _membershipFee: BigNumber
    }
  >

  lateFeeBps(overrides?: CallOverrides): Promise<BigNumber>

  lateFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

  membershipFee(overrides?: CallOverrides): Promise<BigNumber>

  minPrincipalRateInBps(overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setFees(
    _frontLoadingFeeFlat: PromiseOrValue<BigNumberish>,
    _frontLoadingFeeBps: PromiseOrValue<BigNumberish>,
    _lateFeeFlat: PromiseOrValue<BigNumberish>,
    _lateFeeBps: PromiseOrValue<BigNumberish>,
    _membershipFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setMinPrincipalRateInBps(
    _minPrincipalRateInBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setTempCreditRecordStatic(
    _crStatic: BaseStructs.CreditRecordStaticStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    calcCorrection(
      dueDate: PromiseOrValue<BigNumberish>,
      aprInBps: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    calcFrontLoadingFee(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    calcLateFee(
      dueDate: PromiseOrValue<BigNumberish>,
      totalDue: PromiseOrValue<BigNumberish>,
      totalBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    deleteTempCreditRecordStatic(overrides?: CallOverrides): Promise<void>

    distBorrowingAmount(
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        amtToBorrower: BigNumber
        platformFees: BigNumber
      }
    >

    frontLoadingFeeBps(overrides?: CallOverrides): Promise<BigNumber>

    frontLoadingFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

    getDueInfo(
      _cr: BaseStructs.CreditRecordStruct,
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        periodsPassed: BigNumber
        feesAndInterestDue: BigNumber
        totalDue: BigNumber
        unbilledPrincipal: BigNumber
        totalCharges: BigNumber
      }
    >

    getFees(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _frontLoadingFeeFlat: BigNumber
        _frontLoadingFeeBps: BigNumber
        _lateFeeFlat: BigNumber
        _lateFeeBps: BigNumber
        _membershipFee: BigNumber
      }
    >

    lateFeeBps(overrides?: CallOverrides): Promise<BigNumber>

    lateFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

    membershipFee(overrides?: CallOverrides): Promise<BigNumber>

    minPrincipalRateInBps(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setFees(
      _frontLoadingFeeFlat: PromiseOrValue<BigNumberish>,
      _frontLoadingFeeBps: PromiseOrValue<BigNumberish>,
      _lateFeeFlat: PromiseOrValue<BigNumberish>,
      _lateFeeBps: PromiseOrValue<BigNumberish>,
      _membershipFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>

    setMinPrincipalRateInBps(
      _minPrincipalRateInBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>

    setTempCreditRecordStatic(
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: CallOverrides,
    ): Promise<void>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {
    'FeeChanged(uint256,uint256,uint256,uint256,uint256)'(
      frontLoandingFeeFlat?: null,
      frontLoadingFeeBps?: null,
      lateFeeFlat?: null,
      lateFeeBps?: null,
      membershipFee?: null,
    ): FeeChangedEventFilter
    FeeChanged(
      frontLoandingFeeFlat?: null,
      frontLoadingFeeBps?: null,
      lateFeeFlat?: null,
      lateFeeBps?: null,
      membershipFee?: null,
    ): FeeChangedEventFilter

    'MinPrincipalRateChanged(uint256)'(
      minPrincipalRateInBps?: null,
    ): MinPrincipalRateChangedEventFilter
    MinPrincipalRateChanged(
      minPrincipalRateInBps?: null,
    ): MinPrincipalRateChangedEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter
  }

  estimateGas: {
    calcCorrection(
      dueDate: PromiseOrValue<BigNumberish>,
      aprInBps: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    calcFrontLoadingFee(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    calcLateFee(
      dueDate: PromiseOrValue<BigNumberish>,
      totalDue: PromiseOrValue<BigNumberish>,
      totalBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    deleteTempCreditRecordStatic(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    distBorrowingAmount(
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    frontLoadingFeeBps(overrides?: CallOverrides): Promise<BigNumber>

    frontLoadingFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

    getDueInfo(
      _cr: BaseStructs.CreditRecordStruct,
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getFees(overrides?: CallOverrides): Promise<BigNumber>

    lateFeeBps(overrides?: CallOverrides): Promise<BigNumber>

    lateFeeFlat(overrides?: CallOverrides): Promise<BigNumber>

    membershipFee(overrides?: CallOverrides): Promise<BigNumber>

    minPrincipalRateInBps(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setFees(
      _frontLoadingFeeFlat: PromiseOrValue<BigNumberish>,
      _frontLoadingFeeBps: PromiseOrValue<BigNumberish>,
      _lateFeeFlat: PromiseOrValue<BigNumberish>,
      _lateFeeBps: PromiseOrValue<BigNumberish>,
      _membershipFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setMinPrincipalRateInBps(
      _minPrincipalRateInBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setTempCreditRecordStatic(
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calcCorrection(
      dueDate: PromiseOrValue<BigNumberish>,
      aprInBps: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    calcFrontLoadingFee(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    calcLateFee(
      dueDate: PromiseOrValue<BigNumberish>,
      totalDue: PromiseOrValue<BigNumberish>,
      totalBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    deleteTempCreditRecordStatic(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    distBorrowingAmount(
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    frontLoadingFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>

    frontLoadingFeeFlat(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getDueInfo(
      _cr: BaseStructs.CreditRecordStruct,
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getFees(overrides?: CallOverrides): Promise<PopulatedTransaction>

    lateFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>

    lateFeeFlat(overrides?: CallOverrides): Promise<PopulatedTransaction>

    membershipFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    minPrincipalRateInBps(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setFees(
      _frontLoadingFeeFlat: PromiseOrValue<BigNumberish>,
      _frontLoadingFeeBps: PromiseOrValue<BigNumberish>,
      _lateFeeFlat: PromiseOrValue<BigNumberish>,
      _lateFeeBps: PromiseOrValue<BigNumberish>,
      _membershipFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setMinPrincipalRateInBps(
      _minPrincipalRateInBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setTempCreditRecordStatic(
      _crStatic: BaseStructs.CreditRecordStaticStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>
  }
}
