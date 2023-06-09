export type InitialStateType = {
    reportsData: ModelReportDataType[],
    isLoading: boolean
    error: string
    currentPage: number
}

export type Error = {
    name: string;
    message: string;
    stack?: string;
    error: string
}


export type ReportDataType = {
    accessionNumber: string;
    AccountsPayableCurrent: number;
    AccountsReceivableNetCurrent: number;
    AccruedLiabilitiesCurrent: number;
    AccruedProfessionalFeesCurrent: number;
    AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment: number;
    AccumulatedOtherComprehensiveIncomeLossNetOfTax: number;
    AdditionalPaidInCapital: number;
    AdjustmentsToAdditionalPaidInCapitalSharebasedCompensationRequisiteServicePeriodRecognitionValue: number;
    AllocatedShareBasedCompensationExpense: number;
    AllowanceForDoubtfulAccountsReceivableCurrent: number;
    AllowanceForDoubtfulAccountsReceivableWriteOffs: number;
    AmendmentFlag: string;
    AmortizationOfIntangibleAssets: number;
    AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount: number;
    AssetImpairmentCharges: number;
    Assets: number;
    AssetsCurrent: number;
    AssetsFairValueDisclosure: number;
    AuditorFirmId: number;
    AuditorLocation: string;
    AuditorName: string;
    AvailableForSaleSecuritiesDebtMaturitiesWithinOneYearFairValue: number;
    BusinessAcquisitionCostOfAcquiredEntityTransactionCosts: number;
    CashAndCashEquivalentsAtCarryingValue: number;
    CashCashEquivalentsAndMarketableSecurities: number;
    CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents: number;
    CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect: number;
    cik: string;
    CityAreaCode: number;
    ClassOfWarrantOrRightOutstanding: number;
    CommonStockAndAssumedEquityAwardsAsConsiderationForAnAcquisitionOfABusiness: number;
    CommonStockParOrStatedValuePerShare: number;
    CommonStockSharesAuthorized: number;
    CommonStockSharesIssued: number;
    CommonStockSharesOutstanding: number;
    CommonStockValue: number;
    ComprehensiveIncomeNetOfTax: number;
    ConstructionInProgressGross: number;
    ContingentMergerConsiderationEarnOutSharesOutstanding: number;
    ContractWithCustomerAssetNetCurrent: number;
    ContractWithCustomerAssetNetNoncurrent: number;
    ContractWithCustomerReceivableAfterAllowanceForCreditLossCurrent: number;
    CostOfRevenue: number;
    CostsAndExpenses: number;
    CurrentFiscalYearEndDate: string;
    CurrentIncomeTaxExpenseBenefit: number;
    CurrentStateAndLocalTaxExpenseBenefit: number;
    dateFiled: number;
    DeferredFederalIncomeTaxExpenseBenefit: number;
    DeferredIncomeTaxExpenseBenefit: number;
    DeferredIncomeTaxLiabilities: number;
    DeferredStateAndLocalIncomeTaxExpenseBenefit: number;
    DeferredTaxAssetsGross: number;
    DeferredTaxAssetsLeaseLiabilityArrangements: number;
    DeferredTaxAssetsNet: number;
    DeferredTaxAssetsOperatingLossCarryforwards: number;
    DeferredTaxAssetsOther: number;
    DeferredTaxAssetsResearchAndExperimentalCapitalization: number;
    DeferredTaxAssetsRightOfUseAssetArrangements: number;
    DeferredTaxAssetsTaxCreditCarryforwardsResearch: number;
    DeferredTaxAssetsTaxDeferredExpenseCompensationAndBenefitsShareBasedCompensationCost: number;
    DeferredTaxAssetsTaxDeferredExpenseReservesAndAccrualsAccruedLiabilities: number;
    DeferredTaxAssetsValuationAllowance: number;
    DeferredTaxLiabilitiesGoodwillAndIntangibleAssetsIntangibleAssets: number;
    DeferredTaxLiabilitiesPropertyPlantAndEquipment: number;
    DefinedContributionPlanCostRecognized: number;
    DefinedContributionPlanMaximumDeferredCompensationByEmployeesPercentage: number;
    Depreciation: number;
    DocumentAnnualReport: string;
    DocumentFiscalPeriodFocus: string;
    DocumentFiscalYearFocus: number;
    DocumentPeriodEndDate: string;
    DocumentTransitionReport: string;
    documentType: string;
    EarningsPerShareBasic: number;
    EarningsPerShareDiluted: number;
    EffectiveIncomeTaxRateContinuingOperations: number;
    EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate: number;
    EffectiveIncomeTaxRateReconciliationChangeInDeferredTaxAssetsValuationAllowance: number;
    EffectiveIncomeTaxRateReconciliationChangeInDeferredTaxAssetsValuationAllowanceAcquisitionPercent: number;
    EffectiveIncomeTaxRateReconciliationChangeInEnactedTaxRate: number;
    EffectiveIncomeTaxRateReconciliationDisallowedExecutiveCompensationPercent: number;
    EffectiveIncomeTaxRateReconciliationNondeductibleExpenseImpairmentLosses: number;
    EffectiveIncomeTaxRateReconciliationNondeductibleExpenseShareBasedCompensationCost: number;
    EffectiveIncomeTaxRateReconciliationOtherAdjustments: number;
    EffectiveIncomeTaxRateReconciliationStateAndLocalIncomeTaxes: number;
    EffectiveIncomeTaxRateReconciliationTaxCreditsResearch: number;
    EffectiveIncomeTaxRateReconciliationWarantRevaluationPercent: number;
    EmployeeRelatedLiabilitiesCurrent: number;
    EntityAddressAddressLine1: string;
    EntityAddressAddressLine2: string;
    EntityAddressCityOrTown: string;
    EntityAddressPostalZipCode: number;
    EntityAddressStateOrProvince: string;
    EntityCentralIndexKey: number;
    EntityCurrentReportingStatus: string;
    EntityEmergingGrowthCompany: string;
    EntityExTransitionPeriod: string;
    EntityFileNumber: string;
    EntityFilerCategory: string;
    EntityIncorporationStateCountryCode: string;
    EntityInteractiveDataCurrent: string;
    entityName: string;
    EntityRegistrantName: string;
    EntityShellCompany: string;
    EntitySmallBusiness: string;
    EntityTaxIdentificationNumber: string;
    EntityVoluntaryFilers: string;
    EntityWellKnownSeasonedIssuer: string;
    FairValueAdjustmentOfWarrants: number;
    FinanceLeaseLiabilityNoncurrent: number;
    FinanceLeaseLiabilityNoncurrentStatementOfFinancialPositionExtensibleList: string;
    FiniteLivedIntangibleAssetsAccumulatedAmortization: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseAfterYearFive: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseNextTwelveMonths: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseYearFive: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseYearFour: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseYearThree: number;
    FiniteLivedIntangibleAssetsAmortizationExpenseYearTwo: number;
    FiniteLivedIntangibleAssetsGross: number;
    FiniteLivedIntangibleAssetsNet: number;
    GainLossOnWarrantLiability: number;
    GeneralAndAdministrativeExpense: number;
    GoodwillAcquiredDuringPeriod: number;
    GoodwillImpairmentLoss: number;
    IcfrAuditorAttestationFlag: string;
    ImpairmentOfIntangibleAssetsFinitelived: number;
    IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest: number;
    IncomeTaxExpenseBenefit: number;
    IncomeTaxReconciliationChangeInDeferredTaxAssetsValuationAllowance: number;
    IncreasDecreaseInContractAssetsLongTerm: number;
    IncreaseDecreaseInAccountsPayable: number;
    IncreaseDecreaseInAccountsReceivable: number;
    IncreaseDecreaseInAccountsReceivableInclusiveOfAccountsReceivableAcquiredInBusinessCombination: number;
    IncreaseDecreaseInAccruedLiabilities: number;
    IncreaseDecreaseInContractAssetsCurrent: number;
    IncreaseDecreaseInDeferredRevenue: number;
    IncreaseDecreaseInInventories: number;
    IncreaseDecreaseInOtherNoncurrentAssets: number;
    IncreaseDecreaseInOtherNoncurrentLiabilities: number;
    IncreaseDecreaseInPrepaidExpense: number;
    IncreaseDecreaseInUnbilledReceivablesUnderChangesInOperatingAssets: number;
    IncreaseDecreaseUnbilledReceivable: number;
    IncrementalCosts: number;
    IntangibleAssetsNetExcludingGoodwill: number;
    InterestIncomeExpenseNet: number;
    InterestPaidNet: number;
    InventoryAdjustments: number;
    InventoryFinishedGoods: number;
    InventoryNet: number;
    InventoryRawMaterialsAndSupplies: number;
    InventoryWorkInProcess: number;
    InvestmentIncomeAmortizationOfDiscount: number;
    irsNumber: string;
    LeaseCost: number;
    LeaseExpirationDates: number;
    LegalAccrual: number;
    LesseeOperatingLeaseLiabilityPaymentsDue: number;
    LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive: number;
    LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths: number;
    LesseeOperatingLeaseLiabilityPaymentsDueYearFive: number;
    LesseeOperatingLeaseLiabilityPaymentsDueYearFour: number;
    LesseeOperatingLeaseLiabilityPaymentsDueYearThree: number;
    LesseeOperatingLeaseLiabilityPaymentsDueYearTwo: number;
    LesseeOperatingLeaseLiabilityUndiscountedExcessAmount: number;
    Liabilities: number;
    LiabilitiesAndStockholdersEquity: number;
    LiabilitiesCurrent: number;
    LiabilitiesFairValueDisclosure: number;
    LocalPhoneNumber: string;
    MarketableSecuritiesCurrent: number;
    NetCashProvidedByUsedInFinancingActivities: number;
    NetCashProvidedByUsedInInvestingActivities: number;
    NetCashProvidedByUsedInOperatingActivities: number;
    NetImpactToAdditionalPaidInCapitalAndParValueShare: number;
    NetIncomeLoss: number;
    NetIncomeLossAvailableToCommonStockholdersBasic: number;
    NonCashGoodwillImpairmentCharge: number;
    NotesPayable: number;
    NumberOfOperatingSegments: number;
    NumberOfReportableSegments: number;
    NumberOfReportingUnits: number;
    OperatingIncomeLoss: number;
    OperatingLeaseCost: number;
    OperatingLeaseExpense: number;
    OperatingLeaseLiability: number;
    OperatingLeaseLiabilityCurrent: number;
    OperatingLeaseLiabilityNoncurrent: number;
    OperatingLeasePayments: number;
    OperatingLeaseRightOfUseAsset: number;
    OperatingLeaseWeightedAverageDiscountRatePercent: number;
    OperatingLeaseWeightedAverageRemainingLeaseTerm1: string;
    OtherAccruedLiabilitiesCurrent: number;
    OtherAssetsNoncurrent: number;
    OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax: number;
    OtherComprehensiveIncomeLossNetOfTax: number;
    OtherLiabilitiesNoncurrent: number;
    OtherNonoperatingIncomeExpense: number;
    OtherPrepaidExpenseCurrent: number;
    PaymentOfObligationsUnderCapitalLeases: number;
    PaymentsToAcquireBusinessesNetOfCashAcquired: number;
    PaymentsToAcquireMarketableSecurities: number;
    PaymentsToAcquirePropertyPlantAndEquipment: number;
    periodEnd: number;
    periodStart: number;
    PrepaidExpenseAndOtherAssetsCurrent: number;
    PrepaidInsurance: number;
    ProceedsFromSaleAndMaturityOfMarketableSecurities: number;
    ProceedsFromStockOptionsExercised: number;
    ProfitLoss: number;
    PropertyPlantAndEquipmentGross: number;
    PropertyPlantAndEquipmentNet: number;
    PurchaseOfPropertyAndEquipmentIncludedInAccountsPayable: number;
    RecapitalizationOfOldCommonStock: number;
    RecordedUnconditionalPurchaseObligation: number;
    RecordedUnconditionalPurchaseObligationDueInFourthYear: number;
    RecordedUnconditionalPurchaseObligationDueInSecondYear: number;
    RecordedUnconditionalPurchaseObligationDueInThirdYear: number;
    RecordedUnconditionalPurchaseObligationDueWithinOneYear: number;
    RedemptionOfCommonShares: number;
    reportLink: string;
    ResearchAndDevelopmentExpense: number;
    RetainedEarningAccumlatedDeficit: number;
    RetainedEarningsAccumulatedDeficit: number;
    RevenueFromContractWithCustomerExcludingAssessedTax: number;
    RevenueRemainingPerformanceObligation: number;
    Revenues: number;
    RightOfUseAssetObtainedInExchangeForOperatingLeaseLiability: number;
    SellingAndMarketingExpense: number;
    ShareBasedCompensation: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardFairValueAssumptionsExpectedDividendRate: number;
    SharebasedCompensationArrangementBySharebasedPaymentAwardFairValueAssumptionsExpectedTerm1: string;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardFairValueAssumptionsExpectedVolatilityRate: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardFairValueAssumptionsRiskFreeInterestRate: number;
    SharebasedCompensationArrangementBySharebasedPaymentAwardOptionsExercisableIntrinsicValue1: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableNumber: number;
    SharebasedCompensationArrangementBySharebasedPaymentAwardOptionsExercisableWeightedAverageRemainingContractualTerm1: string;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisesInPeriodTotalIntrinsicValue: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsForfeituresInPeriod: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsGrantsInPeriodGross: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingIntrinsicValue: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingNumber: number;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageExercisePrice: number;
    SharebasedCompensationArrangementBySharebasedPaymentAwardOptionsOutstandingWeightedAverageRemainingContractualTerm2: string;
    ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsVestedAndExpectedToVestExercisableWeightedAverageExercisePrice: number;
    ShareBasedCompensationArrangementsByShareBasedPaymentAwardOptionsExercisesInPeriodWeightedAverageExercisePrice: number;
    ShareBasedCompensationArrangementsByShareBasedPaymentAwardOptionsForfeituresInPeriodWeightedAverageExercisePrice: number;
    ShareBasedCompensationArrangementsByShareBasedPaymentAwardOptionsGrantsInPeriodWeightedAverageExercisePrice: number;
    SharesFromBusinessCombinationAndPipeFinancing: number;
    SharesRepurchasedForPaymentOfTaxWithholdings: number;
    SharesRepurchasedForPaymentOfTaxWithholdingsAndOtherValue: number;
    StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest: number;
    StockIssuedDuringPeriodSharesStockOptionsExercised: number;
    StockIssuedDuringPeriodValueAcquisitions: number;
    StockIssuedDuringPeriodValueStockOptionsExercised: number;
    TradingSymbol: string;
    UnbilledContractsReceivable: number;
    UnrecognizedTaxBenefits: number;
    UnrecognizedTaxBenefitsIncreasesResultingFromCurrentPeriodTaxPositions: number;
    update: string;
    ValuationAllowanceDeferredTaxAssetChangeInAmount: number;
    VariableLeaseCost: number;
    WarrantLiabilities: number;
    WarrantLiabilityTransferredOutOfLevelThree: number;
    WeightedAverageNumberOfDilutedSharesOutstanding: number;
    WeightedAverageNumberOfSharesOutstandingBasic: number;
    WorkingCapital: number;
    id: string;
    key: string;
    subkey: string;
    date: number;
    updated: number;
}

export type ModelReportDataType = {
    tradingSymbol: string,
    entityName: string,
    documentPeriodEndDate: string,
    revenueFromContractWithCustomerExcludingAssessedTax: number,
    operatingIncomeLoss: number,
    netIncomeLoss: number,
    earningsPerShareDiluted: number
}

