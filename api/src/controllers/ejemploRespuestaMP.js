const orderInfo={
    accounts_info: null,
    acquirer_reconciliation: [],
    additional_info: {
      authentication_code: null,
      available_balance: null,
      ip_address: '190.15.201.57',
      items: [
        {
          category_id: null,
          description: null,
          id: '64f90ca80b19fbc249df9615',
          picture_url: null,
          quantity: '1',
          title: 'Zapatillas John Foos',
          unit_price: '58560'
        },
        {
          category_id: null,
          description: null,
          id: '64f8c6a662b7d90777fffa87',
          picture_url: null,
          quantity: '1',
          title: 'Camiseta',
          unit_price: '369'
        }
      ],
      nsu_processadora: null
    },
    authorization_code: '301299',
    binary_mode: false,
    brand_id: null,
    build_version: '3.15.1',
    call_for_authorize_id: null,
    captured: true,
    card: {
      bin: '51206944',
      cardholder: { identification: [Object], name: 'APRO' },
      date_created: '2023-09-07T23:45:07.000-04:00',
      date_last_updated: '2023-09-07T23:45:07.000-04:00',
      expiration_month: 11,
      expiration_year: 2025,
      first_six_digits: '512069',
      id: '9264444779',
      last_four_digits: '6271'
    },
    charges_details: [
      {
        accounts: [Object],
        amounts: [Object],
        client_id: 0,
        date_created: '2023-09-07T23:45:07.000-04:00',
        id: '63234348315-001',
        last_updated: '2023-09-07T23:45:07.000-04:00',
        metadata: {},
        name: 'mercadopago_fee',
        refund_charges: [],
        reserve_id: null,
        type: 'fee'
      }
    ],
    collector_id: 1459647492,
    corporation_id: null,
    counter_currency: null,
    coupon_amount: 0,
    currency_id: 'COP',
    date_approved: '2023-09-07T23:45:07.000-04:00',
    date_created: '2023-09-07T23:45:07.000-04:00',
    date_last_updated: '2023-09-07T23:45:07.000-04:00',
    date_of_expiration: '2023-09-10T23:45:07.000-04:00',
    deduction_schema: null,
    description: 'Camiseta',
    differential_pricing_id: null,
    external_reference: null,
    fee_details: [
      {
        amount: 3262.02,
        fee_payer: 'collector',
        type: 'mercadopago_fee'
      }
    ],
    financing_group: null,
    id: 63234348315,
    installments: 1,
    integrator_id: null,
    issuer_id: '538',
    live_mode: true,
    marketplace_owner: 1459647492,
    merchant_account_id: null,
    merchant_number: null,
    metadata: {},
    money_release_date: '2023-09-07T23:45:07.000-04:00',
    money_release_schema: null,
    money_release_status: 'released',
    net_amount: 58929,
    notification_url: 'https://d0fc-190-15-201-57.ngrok.io/api/v1/create-order/notification/64eb7877d320f4cf55a5d4ff',
    operation_type: 'regular_payment',
    order: { id: '11638208699', type: 'mercadopago' },
    payer: {
      email: 'test_user_1488416305@testuser.com',
      entity_type: null,
      first_name: null,
      id: '1459470208',
      identification: { number: '11111111', type: 'CC' },
      last_name: null,
      operator_id: null,
      phone: { area_code: null, extension: null, number: null },
      type: null
    },
    payment_method: {
      data: { routing_data: [Object] },
      id: 'master',
      issuer_id: '538',
      type: 'credit_card'
    },
    payment_method_id: 'master',
    payment_type_id: 'credit_card',
    platform_id: null,
    point_of_interaction: {
      business_info: { sub_unit: 'checkout_pro', unit: 'online_payments' },
      transaction_data: { e2e_id: null },
      type: 'CHECKOUT'
    },
    pos_id: null,
    processing_mode: 'aggregator',
    refunds: [],
    shipping_amount: 0,
    sponsor_id: null,
    statement_descriptor: 'Mercadopago*fake',
    status: 'approved',
    status_detail: 'accredited',
    store_id: null,
    tags: null,
    taxes: [ { type: 'IVA', value: 0 } ],
    taxes_amount: 0,
    transaction_amount: 58929,
    transaction_amount_refunded: 0,
    transaction_details: {
      acquirer_reference: null,
      external_resource_url: null,
      financial_institution: null,
      installment_amount: 58929,
      net_received_amount: 55666.98,
      overpaid_amount: 0,
      payable_deferral_period: null,
      payment_method_reference_id: null,
      total_paid_amount: 58929
    }
  }


// const resSale= { productIds: [ '64f76e5262a355b6a7d3ddd8' ] }
// { productIds: [ '64f76e5262a355b6a7d3ddd8' ] }
// {
//   products: [
//     {
//       _id: new ObjectId("64f76e5262a355b6a7d3ddd8"),
//       storeId: new ObjectId("64daf18450c25495a4a6a612"),
//       name: 'Auriculares i19',
//       price: 5854.52,
//       image: [Array],
//       description: 'Audifonos bluetooth para que lleves tu música a donde vayas',
//       stock: 392,
//       categories: [Object],
//       color: 'Blanco',
//       deleted: false,
//       __v: 0
//     }
//   ]
// }
// {
//   products: [
//     {
//       _id: new ObjectId("64f76e5262a355b6a7d3ddd8"),
//       storeId: new ObjectId("64daf18450c25495a4a6a612"),
//       name: 'Auriculares i19',
//       price: 5854.52,
//       image: [Array],
//       description: 'Audifonos bluetooth para que lleves tu música a donde vayas',
//       stock: 392,
//       categories: [Object],
//       color: 'Blanco',
//       deleted: false,
//       __v: 0
//     }
//   ]
// }
// { userCity: 'Springfield' }
// { createSale: [AsyncFunction: createSale] } 



// _id
// 64faaf1baca879fde69e95e5
// user
// 64ebab8fd320f4cf55a5d504

// products
// Array (2)
// totalPrice
// 100272
// paymentMethod
// "credit_card"
// transactionDate
// 2023-09-08T04:58:59.000+00:00
// transactionStatus
// "approved"
// __v
// 0