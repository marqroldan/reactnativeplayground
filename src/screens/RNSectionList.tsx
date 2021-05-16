import React from 'react';
import {View, Text, TextInput, SectionList} from 'react-native';
import {AlphabetList} from 'react-native-section-alphabet-list';

const data = [
  {
    title: 'a',
    data: [
      {
        key: 'AF',
        code3: 'AFG',
        value: 'Afghanistan',
        number: '004',
      },
      {
        key: 'AL',
        code3: 'ALB',
        value: 'Albania',
        number: '008',
      },
      {
        key: 'DZ',
        code3: 'DZA',
        value: 'Algeria',
        number: '012',
      },
      {
        key: 'AS',
        code3: 'ASM',
        value: 'American Samoa',
        number: '016',
      },
      {
        key: 'AD',
        code3: 'AND',
        value: 'Andorra',
        number: '020',
      },
      {
        key: 'AO',
        code3: 'AGO',
        value: 'Angola',
        number: '024',
      },
      {
        key: 'AI',
        code3: 'AIA',
        value: 'Anguilla',
        number: '660',
      },
      {
        key: 'AQ',
        code3: 'ATA',
        value: 'Antarctica',
        number: '010',
      },
      {
        key: 'AG',
        code3: 'ATG',
        value: 'Antigua and Barbuda',
        number: '028',
      },
      {
        key: 'AR',
        code3: 'ARG',
        value: 'Argentina',
        number: '032',
      },
      {
        key: 'AM',
        code3: 'ARM',
        value: 'Armenia',
        number: '051',
      },
      {
        key: 'AW',
        code3: 'ABW',
        value: 'Aruba',
        number: '533',
      },
      {
        key: 'AU',
        code3: 'AUS',
        value: 'Australia',
        number: '036',
      },
      {
        key: 'AT',
        code3: 'AUT',
        value: 'Austria',
        number: '040',
      },
      {
        key: 'AZ',
        code3: 'AZE',
        value: 'Azerbaijan',
        number: '031',
      },
    ],
  },
  {
    title: 'b',
    data: [
      {
        key: 'BS',
        code3: 'BHS',
        value: 'Bahamas (the)',
        number: '044',
      },
      {
        key: 'BH',
        code3: 'BHR',
        value: 'Bahrain',
        number: '048',
      },
      {
        key: 'BD',
        code3: 'BGD',
        value: 'Bangladesh',
        number: '050',
      },
      {
        key: 'BB',
        code3: 'BRB',
        value: 'Barbados',
        number: '052',
      },
      {
        key: 'BY',
        code3: 'BLR',
        value: 'Belarus',
        number: '112',
      },
      {
        key: 'BE',
        code3: 'BEL',
        value: 'Belgium',
        number: '056',
      },
      {
        key: 'BZ',
        code3: 'BLZ',
        value: 'Belize',
        number: '084',
      },
      {
        key: 'BJ',
        code3: 'BEN',
        value: 'Benin',
        number: '204',
      },
      {
        key: 'BM',
        code3: 'BMU',
        value: 'Bermuda',
        number: '060',
      },
      {
        key: 'BT',
        code3: 'BTN',
        value: 'Bhutan',
        number: '064',
      },
      {
        key: 'BO',
        code3: 'BOL',
        value: 'Bolivia (Plurinational State of)',
        number: '068',
      },
      {
        key: 'BQ',
        code3: 'BES',
        value: 'Bonaire, Sint Eustatius and Saba',
        number: '535',
      },
      {
        key: 'BA',
        code3: 'BIH',
        value: 'Bosnia and Herzegovina',
        number: '070',
      },
      {
        key: 'BW',
        code3: 'BWA',
        value: 'Botswana',
        number: '072',
      },
      {
        key: 'BV',
        code3: 'BVT',
        value: 'Bouvet Island',
        number: '074',
      },
      {
        key: 'BR',
        code3: 'BRA',
        value: 'Brazil',
        number: '076',
      },
      {
        key: 'IO',
        code3: 'IOT',
        value: 'British Indian Ocean Territory (the)',
        number: '086',
      },
      {
        key: 'BN',
        code3: 'BRN',
        value: 'Brunei Darussalam',
        number: '096',
      },
      {
        key: 'BG',
        code3: 'BGR',
        value: 'Bulgaria',
        number: '100',
      },
      {
        key: 'BF',
        code3: 'BFA',
        value: 'Burkina Faso',
        number: '854',
      },
      {
        key: 'BI',
        code3: 'BDI',
        value: 'Burundi',
        number: '108',
      },
    ],
  },
  {
    title: 'c',
    data: [
      {
        key: 'CV',
        code3: 'CPV',
        value: 'Cabo Verde',
        number: '132',
      },
      {
        key: 'KH',
        code3: 'KHM',
        value: 'Cambodia',
        number: '116',
      },
      {
        key: 'CM',
        code3: 'CMR',
        value: 'Cameroon',
        number: '120',
      },
      {
        key: 'CA',
        code3: 'CAN',
        value: 'Canada',
        number: '124',
      },
      {
        key: 'KY',
        code3: 'CYM',
        value: 'Cayman Islands (the)',
        number: '136',
      },
      {
        key: 'CF',
        code3: 'CAF',
        value: 'Central African Republic (the)',
        number: '140',
      },
      {
        key: 'TD',
        code3: 'TCD',
        value: 'Chad',
        number: '148',
      },
      {
        key: 'CL',
        code3: 'CHL',
        value: 'Chile',
        number: '152',
      },
      {
        key: 'CN',
        code3: 'CHN',
        value: 'China',
        number: '156',
      },
      {
        key: 'CX',
        code3: 'CXR',
        value: 'Christmas Island',
        number: '162',
      },
      {
        key: 'CC',
        code3: 'CCK',
        value: 'Cocos (Keeling) Islands (the)',
        number: '166',
      },
      {
        key: 'CO',
        code3: 'COL',
        value: 'Colombia',
        number: '170',
      },
      {
        key: 'KM',
        code3: 'COM',
        value: 'Comoros (the)',
        number: '174',
      },
      {
        key: 'CD',
        code3: 'COD',
        value: 'Congo (the Democratic Republic of the)',
        number: '180',
      },
      {
        key: 'CG',
        code3: 'COG',
        value: 'Congo (the)',
        number: '178',
      },
      {
        key: 'CK',
        code3: 'COK',
        value: 'Cook Islands (the)',
        number: '184',
      },
      {
        key: 'CR',
        code3: 'CRI',
        value: 'Costa Rica',
        number: '188',
      },
      {
        key: 'HR',
        code3: 'HRV',
        value: 'Croatia',
        number: '191',
      },
      {
        key: 'CU',
        code3: 'CUB',
        value: 'Cuba',
        number: '192',
      },
      {
        key: 'CW',
        code3: 'CUW',
        value: 'Curaçao',
        number: '531',
      },
      {
        key: 'CY',
        code3: 'CYP',
        value: 'Cyprus',
        number: '196',
      },
      {
        key: 'CZ',
        code3: 'CZE',
        value: 'Czechia',
        number: '203',
      },
      {
        key: 'CI',
        code3: 'CIV',
        value: "Côte d'Ivoire",
        number: '384',
      },
    ],
  },
  {
    title: 'd',
    data: [
      {
        key: 'DK',
        code3: 'DNK',
        value: 'Denmark',
        number: '208',
      },
      {
        key: 'DJ',
        code3: 'DJI',
        value: 'Djibouti',
        number: '262',
      },
      {
        key: 'DM',
        code3: 'DMA',
        value: 'Dominica',
        number: '212',
      },
      {
        key: 'DO',
        code3: 'DOM',
        value: 'Dominican Republic (the)',
        number: '214',
      },
    ],
  },
  {
    title: 'e',
    data: [
      {
        key: 'EC',
        code3: 'ECU',
        value: 'Ecuador',
        number: '218',
      },
      {
        key: 'EG',
        code3: 'EGY',
        value: 'Egypt',
        number: '818',
      },
      {
        key: 'SV',
        code3: 'SLV',
        value: 'El Salvador',
        number: '222',
      },
      {
        key: 'GQ',
        code3: 'GNQ',
        value: 'Equatorial Guinea',
        number: '226',
      },
      {
        key: 'ER',
        code3: 'ERI',
        value: 'Eritrea',
        number: '232',
      },
      {
        key: 'EE',
        code3: 'EST',
        value: 'Estonia',
        number: '233',
      },
      {
        key: 'SZ',
        code3: 'SWZ',
        value: 'Eswatini',
        number: '748',
      },
      {
        key: 'ET',
        code3: 'ETH',
        value: 'Ethiopia',
        number: '231',
      },
    ],
  },
  {
    title: 'f',
    data: [
      {
        key: 'FK',
        code3: 'FLK',
        value: 'Falkland Islands (the) [Malvinas]',
        number: '238',
      },
      {
        key: 'FO',
        code3: 'FRO',
        value: 'Faroe Islands (the)',
        number: '234',
      },
      {
        key: 'FJ',
        code3: 'FJI',
        value: 'Fiji',
        number: '242',
      },
      {
        key: 'FI',
        code3: 'FIN',
        value: 'Finland',
        number: '246',
      },
      {
        key: 'FR',
        code3: 'FRA',
        value: 'France',
        number: '250',
      },
      {
        key: 'GF',
        code3: 'GUF',
        value: 'French Guiana',
        number: '254',
      },
      {
        key: 'PF',
        code3: 'PYF',
        value: 'French Polynesia',
        number: '258',
      },
      {
        key: 'TF',
        code3: 'ATF',
        value: 'French Southern Territories (the)',
        number: '260',
      },
    ],
  },
  {
    title: 'g',
    data: [
      {
        key: 'GA',
        code3: 'GAB',
        value: 'Gabon',
        number: '266',
      },
      {
        key: 'GM',
        code3: 'GMB',
        value: 'Gambia (the)',
        number: '270',
      },
      {
        key: 'GE',
        code3: 'GEO',
        value: 'Georgia',
        number: '268',
      },
      {
        key: 'DE',
        code3: 'DEU',
        value: 'Germany',
        number: '276',
      },
      {
        key: 'GH',
        code3: 'GHA',
        value: 'Ghana',
        number: '288',
      },
      {
        key: 'GI',
        code3: 'GIB',
        value: 'Gibraltar',
        number: '292',
      },
      {
        key: 'GR',
        code3: 'GRC',
        value: 'Greece',
        number: '300',
      },
      {
        key: 'GL',
        code3: 'GRL',
        value: 'Greenland',
        number: '304',
      },
      {
        key: 'GD',
        code3: 'GRD',
        value: 'Grenada',
        number: '308',
      },
      {
        key: 'GP',
        code3: 'GLP',
        value: 'Guadeloupe',
        number: '312',
      },
      {
        key: 'GU',
        code3: 'GUM',
        value: 'Guam',
        number: '316',
      },
      {
        key: 'GT',
        code3: 'GTM',
        value: 'Guatemala',
        number: '320',
      },
      {
        key: 'GG',
        code3: 'GGY',
        value: 'Guernsey',
        number: '831',
      },
      {
        key: 'GN',
        code3: 'GIN',
        value: 'Guinea',
        number: '324',
      },
      {
        key: 'GW',
        code3: 'GNB',
        value: 'Guinea-Bissau',
        number: '624',
      },
      {
        key: 'GY',
        code3: 'GUY',
        value: 'Guyana',
        number: '328',
      },
    ],
  },
  {
    title: 'h',
    data: [
      {
        key: 'HT',
        code3: 'HTI',
        value: 'Haiti',
        number: '332',
      },
      {
        key: 'HM',
        code3: 'HMD',
        value: 'Heard Island and McDonald Islands',
        number: '334',
      },
      {
        key: 'VA',
        code3: 'VAT',
        value: 'Holy See (the)',
        number: '336',
      },
      {
        key: 'HN',
        code3: 'HND',
        value: 'Honduras',
        number: '340',
      },
      {
        key: 'HK',
        code3: 'HKG',
        value: 'Hong Kong',
        number: '344',
      },
      {
        key: 'HU',
        code3: 'HUN',
        value: 'Hungary',
        number: '348',
      },
    ],
  },
  {
    title: 'i',
    data: [
      {
        key: 'IS',
        code3: 'ISL',
        value: 'Iceland',
        number: '352',
      },
      {
        key: 'IN',
        code3: 'IND',
        value: 'India',
        number: '356',
      },
      {
        key: 'ID',
        code3: 'IDN',
        value: 'Indonesia',
        number: '360',
      },
      {
        key: 'IR',
        code3: 'IRN',
        value: 'Iran (Islamic Republic of)',
        number: '364',
      },
      {
        key: 'IQ',
        code3: 'IRQ',
        value: 'Iraq',
        number: '368',
      },
      {
        key: 'IE',
        code3: 'IRL',
        value: 'Ireland',
        number: '372',
      },
      {
        key: 'IM',
        code3: 'IMN',
        value: 'Isle of Man',
        number: '833',
      },
      {
        key: 'IL',
        code3: 'ISR',
        value: 'Israel',
        number: '376',
      },
      {
        key: 'IT',
        code3: 'ITA',
        value: 'Italy',
        number: '380',
      },
    ],
  },
  {
    title: 'j',
    data: [
      {
        key: 'JM',
        code3: 'JAM',
        value: 'Jamaica',
        number: '388',
      },
      {
        key: 'JP',
        code3: 'JPN',
        value: 'Japan',
        number: '392',
      },
      {
        key: 'JE',
        code3: 'JEY',
        value: 'Jersey',
        number: '832',
      },
      {
        key: 'JO',
        code3: 'JOR',
        value: 'Jordan',
        number: '400',
      },
    ],
  },
  {
    title: 'k',
    data: [
      {
        key: 'KZ',
        code3: 'KAZ',
        value: 'Kazakhstan',
        number: '398',
      },
      {
        key: 'KE',
        code3: 'KEN',
        value: 'Kenya',
        number: '404',
      },
      {
        key: 'KI',
        code3: 'KIR',
        value: 'Kiribati',
        number: '296',
      },
      {
        key: 'KP',
        code3: 'PRK',
        value: "Korea (the Democratic People's Republic of)",
        number: '408',
      },
      {
        key: 'KR',
        code3: 'KOR',
        value: 'Korea (the Republic of)',
        number: '410',
      },
      {
        key: 'KW',
        code3: 'KWT',
        value: 'Kuwait',
        number: '414',
      },
      {
        key: 'KG',
        code3: 'KGZ',
        value: 'Kyrgyzstan',
        number: '417',
      },
    ],
  },
  {
    title: 'l',
    data: [
      {
        key: 'LA',
        code3: 'LAO',
        value: "Lao People's Democratic Republic (the)",
        number: '418',
      },
      {
        key: 'LV',
        code3: 'LVA',
        value: 'Latvia',
        number: '428',
      },
      {
        key: 'LB',
        code3: 'LBN',
        value: 'Lebanon',
        number: '422',
      },
      {
        key: 'LS',
        code3: 'LSO',
        value: 'Lesotho',
        number: '426',
      },
      {
        key: 'LR',
        code3: 'LBR',
        value: 'Liberia',
        number: '430',
      },
      {
        key: 'LY',
        code3: 'LBY',
        value: 'Libya',
        number: '434',
      },
      {
        key: 'LI',
        code3: 'LIE',
        value: 'Liechtenstein',
        number: '438',
      },
      {
        key: 'LT',
        code3: 'LTU',
        value: 'Lithuania',
        number: '440',
      },
      {
        key: 'LU',
        code3: 'LUX',
        value: 'Luxembourg',
        number: '442',
      },
    ],
  },
  {
    title: 'm',
    data: [
      {
        key: 'MO',
        code3: 'MAC',
        value: 'Macao',
        number: '446',
      },
      {
        key: 'MG',
        code3: 'MDG',
        value: 'Madagascar',
        number: '450',
      },
      {
        key: 'MW',
        code3: 'MWI',
        value: 'Malawi',
        number: '454',
      },
      {
        key: 'MY',
        code3: 'MYS',
        value: 'Malaysia',
        number: '458',
      },
      {
        key: 'MV',
        code3: 'MDV',
        value: 'Maldives',
        number: '462',
      },
      {
        key: 'ML',
        code3: 'MLI',
        value: 'Mali',
        number: '466',
      },
      {
        key: 'MT',
        code3: 'MLT',
        value: 'Malta',
        number: '470',
      },
      {
        key: 'MH',
        code3: 'MHL',
        value: 'Marshall Islands (the)',
        number: '584',
      },
      {
        key: 'MQ',
        code3: 'MTQ',
        value: 'Martinique',
        number: '474',
      },
      {
        key: 'MR',
        code3: 'MRT',
        value: 'Mauritania',
        number: '478',
      },
      {
        key: 'MU',
        code3: 'MUS',
        value: 'Mauritius',
        number: '480',
      },
      {
        key: 'YT',
        code3: 'MYT',
        value: 'Mayotte',
        number: '175',
      },
      {
        key: 'MX',
        code3: 'MEX',
        value: 'Mexico',
        number: '484',
      },
      {
        key: 'FM',
        code3: 'FSM',
        value: 'Micronesia (Federated States of)',
        number: '583',
      },
      {
        key: 'MD',
        code3: 'MDA',
        value: 'Moldova (the Republic of)',
        number: '498',
      },
      {
        key: 'MC',
        code3: 'MCO',
        value: 'Monaco',
        number: '492',
      },
      {
        key: 'MN',
        code3: 'MNG',
        value: 'Mongolia',
        number: '496',
      },
      {
        key: 'ME',
        code3: 'MNE',
        value: 'Montenegro',
        number: '499',
      },
      {
        key: 'MS',
        code3: 'MSR',
        value: 'Montserrat',
        number: '500',
      },
      {
        key: 'MA',
        code3: 'MAR',
        value: 'Morocco',
        number: '504',
      },
      {
        key: 'MZ',
        code3: 'MOZ',
        value: 'Mozambique',
        number: '508',
      },
      {
        key: 'MM',
        code3: 'MMR',
        value: 'Myanmar',
        number: '104',
      },
    ],
  },
  {
    title: 'n',
    data: [
      {
        key: 'NA',
        code3: 'NAM',
        value: 'Namibia',
        number: '516',
      },
      {
        key: 'NR',
        code3: 'NRU',
        value: 'Nauru',
        number: '520',
      },
      {
        key: 'NP',
        code3: 'NPL',
        value: 'Nepal',
        number: '524',
      },
      {
        key: 'NL',
        code3: 'NLD',
        value: 'Netherlands (the)',
        number: '528',
      },
      {
        key: 'NC',
        code3: 'NCL',
        value: 'New Caledonia',
        number: '540',
      },
      {
        key: 'NZ',
        code3: 'NZL',
        value: 'New Zealand',
        number: '554',
      },
      {
        key: 'NI',
        code3: 'NIC',
        value: 'Nicaragua',
        number: '558',
      },
      {
        key: 'NE',
        code3: 'NER',
        value: 'Niger (the)',
        number: '562',
      },
      {
        key: 'NG',
        code3: 'NGA',
        value: 'Nigeria',
        number: '566',
      },
      {
        key: 'NU',
        code3: 'NIU',
        value: 'Niue',
        number: '570',
      },
      {
        key: 'NF',
        code3: 'NFK',
        value: 'Norfolk Island',
        number: '574',
      },
      {
        key: 'MP',
        code3: 'MNP',
        value: 'Northern Mariana Islands (the)',
        number: '580',
      },
      {
        key: 'NO',
        code3: 'NOR',
        value: 'Norway',
        number: '578',
      },
    ],
  },
  {
    title: 'o',
    data: [
      {
        key: 'OM',
        code3: 'OMN',
        value: 'Oman',
        number: '512',
      },
    ],
  },
  {
    title: 'p',
    data: [
      {
        key: 'PK',
        code3: 'PAK',
        value: 'Pakistan',
        number: '586',
      },
      {
        key: 'PW',
        code3: 'PLW',
        value: 'Palau',
        number: '585',
      },
      {
        key: 'PS',
        code3: 'PSE',
        value: 'Palestine, State of',
        number: '275',
      },
      {
        key: 'PA',
        code3: 'PAN',
        value: 'Panama',
        number: '591',
      },
      {
        key: 'PG',
        code3: 'PNG',
        value: 'Papua New Guinea',
        number: '598',
      },
      {
        key: 'PY',
        code3: 'PRY',
        value: 'Paraguay',
        number: '600',
      },
      {
        key: 'PE',
        code3: 'PER',
        value: 'Peru',
        number: '604',
      },
      {
        key: 'PH',
        code3: 'PHL',
        value: 'Philippines (the)',
        number: '608',
      },
      {
        key: 'PN',
        code3: 'PCN',
        value: 'Pitcairn',
        number: '612',
      },
      {
        key: 'PL',
        code3: 'POL',
        value: 'Poland',
        number: '616',
      },
      {
        key: 'PT',
        code3: 'PRT',
        value: 'Portugal',
        number: '620',
      },
      {
        key: 'PR',
        code3: 'PRI',
        value: 'Puerto Rico',
        number: '630',
      },
    ],
  },
  {
    title: 'q',
    data: [
      {
        key: 'QA',
        code3: 'QAT',
        value: 'Qatar',
        number: '634',
      },
    ],
  },
  {
    title: 'r',
    data: [
      {
        key: 'MK',
        code3: 'MKD',
        value: 'Republic of North Macedonia',
        number: '807',
      },
      {
        key: 'RO',
        code3: 'ROU',
        value: 'Romania',
        number: '642',
      },
      {
        key: 'RU',
        code3: 'RUS',
        value: 'Russian Federation (the)',
        number: '643',
      },
      {
        key: 'RW',
        code3: 'RWA',
        value: 'Rwanda',
        number: '646',
      },
      {
        key: 'RE',
        code3: 'REU',
        value: 'Réunion',
        number: '638',
      },
    ],
  },
  {
    title: 's',
    data: [
      {
        key: 'BL',
        code3: 'BLM',
        value: 'Saint Barthélemy',
        number: '652',
      },
      {
        key: 'SH',
        code3: 'SHN',
        value: 'Saint Helena, Ascension and Tristan da Cunha',
        number: '654',
      },
      {
        key: 'KN',
        code3: 'KNA',
        value: 'Saint Kitts and Nevis',
        number: '659',
      },
      {
        key: 'LC',
        code3: 'LCA',
        value: 'Saint Lucia',
        number: '662',
      },
      {
        key: 'MF',
        code3: 'MAF',
        value: 'Saint Martin (French part)',
        number: '663',
      },
      {
        key: 'PM',
        code3: 'SPM',
        value: 'Saint Pierre and Miquelon',
        number: '666',
      },
      {
        key: 'VC',
        code3: 'VCT',
        value: 'Saint Vincent and the Grenadines',
        number: '670',
      },
      {
        key: 'WS',
        code3: 'WSM',
        value: 'Samoa',
        number: '882',
      },
      {
        key: 'SM',
        code3: 'SMR',
        value: 'San Marino',
        number: '674',
      },
      {
        key: 'ST',
        code3: 'STP',
        value: 'Sao Tome and Principe',
        number: '678',
      },
      {
        key: 'SA',
        code3: 'SAU',
        value: 'Saudi Arabia',
        number: '682',
      },
      {
        key: 'SN',
        code3: 'SEN',
        value: 'Senegal',
        number: '686',
      },
      {
        key: 'RS',
        code3: 'SRB',
        value: 'Serbia',
        number: '688',
      },
      {
        key: 'SC',
        code3: 'SYC',
        value: 'Seychelles',
        number: '690',
      },
      {
        key: 'SL',
        code3: 'SLE',
        value: 'Sierra Leone',
        number: '694',
      },
      {
        key: 'SG',
        code3: 'SGP',
        value: 'Singapore',
        number: '702',
      },
      {
        key: 'SX',
        code3: 'SXM',
        value: 'Sint Maarten (Dutch part)',
        number: '534',
      },
      {
        key: 'SK',
        code3: 'SVK',
        value: 'Slovakia',
        number: '703',
      },
      {
        key: 'SI',
        code3: 'SVN',
        value: 'Slovenia',
        number: '705',
      },
      {
        key: 'SB',
        code3: 'SLB',
        value: 'Solomon Islands',
        number: '090',
      },
      {
        key: 'SO',
        code3: 'SOM',
        value: 'Somalia',
        number: '706',
      },
      {
        key: 'ZA',
        code3: 'ZAF',
        value: 'South Africa',
        number: '710',
      },
      {
        key: 'GS',
        code3: 'SGS',
        value: 'South Georgia and the South Sandwich Islands',
        number: '239',
      },
      {
        key: 'SS',
        code3: 'SSD',
        value: 'South Sudan',
        number: '728',
      },
      {
        key: 'ES',
        code3: 'ESP',
        value: 'Spain',
        number: '724',
      },
      {
        key: 'LK',
        code3: 'LKA',
        value: 'Sri Lanka',
        number: '144',
      },
      {
        key: 'SD',
        code3: 'SDN',
        value: 'Sudan (the)',
        number: '729',
      },
      {
        key: 'SR',
        code3: 'SUR',
        value: 'Suriname',
        number: '740',
      },
      {
        key: 'SJ',
        code3: 'SJM',
        value: 'Svalbard and Jan Mayen',
        number: '744',
      },
      {
        key: 'SE',
        code3: 'SWE',
        value: 'Sweden',
        number: '752',
      },
      {
        key: 'CH',
        code3: 'CHE',
        value: 'Switzerland',
        number: '756',
      },
      {
        key: 'SY',
        code3: 'SYR',
        value: 'Syrian Arab Republic',
        number: '760',
      },
    ],
  },
  {
    title: 't',
    data: [
      {
        key: 'TW',
        code3: 'TWN',
        value: 'Taiwan',
        number: '158',
      },
      {
        key: 'TJ',
        code3: 'TJK',
        value: 'Tajikistan',
        number: '762',
      },
      {
        key: 'TZ',
        code3: 'TZA',
        value: 'Tanzania, United Republic of',
        number: '834',
      },
      {
        key: 'TH',
        code3: 'THA',
        value: 'Thailand',
        number: '764',
      },
      {
        key: 'TL',
        code3: 'TLS',
        value: 'Timor-Leste',
        number: '626',
      },
      {
        key: 'TG',
        code3: 'TGO',
        value: 'Togo',
        number: '768',
      },
      {
        key: 'TK',
        code3: 'TKL',
        value: 'Tokelau',
        number: '772',
      },
      {
        key: 'TO',
        code3: 'TON',
        value: 'Tonga',
        number: '776',
      },
      {
        key: 'TT',
        code3: 'TTO',
        value: 'Trinidad and Tobago',
        number: '780',
      },
      {
        key: 'TN',
        code3: 'TUN',
        value: 'Tunisia',
        number: '788',
      },
      {
        key: 'TR',
        code3: 'TUR',
        value: 'Turkey',
        number: '792',
      },
      {
        key: 'TM',
        code3: 'TKM',
        value: 'Turkmenistan',
        number: '795',
      },
      {
        key: 'TC',
        code3: 'TCA',
        value: 'Turks and Caicos Islands (the)',
        number: '796',
      },
      {
        key: 'TV',
        code3: 'TUV',
        value: 'Tuvalu',
        number: '798',
      },
    ],
  },
  {
    title: 'u',
    data: [
      {
        key: 'UG',
        code3: 'UGA',
        value: 'Uganda',
        number: '800',
      },
      {
        key: 'UA',
        code3: 'UKR',
        value: 'Ukraine',
        number: '804',
      },
      {
        key: 'AE',
        code3: 'ARE',
        value: 'United Arab Emirates (the)',
        number: '784',
      },
      {
        key: 'GB',
        code3: 'GBR',
        value: 'United Kingdom of Great Britain and Northern Ireland (the)',
        number: '826',
      },
      {
        key: 'UM',
        code3: 'UMI',
        value: 'United States Minor Outlying Islands (the)',
        number: '581',
      },
      {
        key: 'US',
        code3: 'USA',
        value: 'United States of America (the)',
        number: '840',
      },
      {
        key: 'UY',
        code3: 'URY',
        value: 'Uruguay',
        number: '858',
      },
      {
        key: 'UZ',
        code3: 'UZB',
        value: 'Uzbekistan',
        number: '860',
      },
    ],
  },
  {
    title: 'v',
    data: [
      {
        key: 'VU',
        code3: 'VUT',
        value: 'Vanuatu',
        number: '548',
      },
      {
        key: 'VE',
        code3: 'VEN',
        value: 'Venezuela (Bolivarian Republic of)',
        number: '862',
      },
      {
        key: 'VN',
        code3: 'VNM',
        value: 'Viet Nam',
        number: '704',
      },
      {
        key: 'VG',
        code3: 'VGB',
        value: 'Virgin Islands (British)',
        number: '092',
      },
      {
        key: 'VI',
        code3: 'VIR',
        value: 'Virgin Islands (U.S.)',
        number: '850',
      },
    ],
  },
  {
    title: 'w',
    data: [
      {
        key: 'WF',
        code3: 'WLF',
        value: 'Wallis and Futuna',
        number: '876',
      },
      {
        key: 'EH',
        code3: 'ESH',
        value: 'Western Sahara',
        number: '732',
      },
    ],
  },
  {
    title: 'y',
    data: [
      {
        key: 'YE',
        code3: 'YEM',
        value: 'Yemen',
        number: '887',
      },
    ],
  },
  {
    title: 'z',
    data: [
      {
        key: 'ZM',
        code3: 'ZMB',
        value: 'Zambia',
        number: '894',
      },
      {
        key: 'ZW',
        code3: 'ZWE',
        value: 'Zimbabwe',
        number: '716',
      },
    ],
  },
  {
    title: 'å',
    data: [
      {
        key: 'AX',
        code3: 'ALA',
        value: 'Åland Islands',
        number: '248',
      },
    ],
  },
  {
    title: 'ñ',
    data: [
      {
        key: 'Ñ',
        value: 'Ñ',
      },
    ],
  },
];

const styles = {
  listItemContainer: {
    padding: 10,
  },
  listItemLabel: {
    color: 'blue',
  },
  sectionHeaderContainer: {
    padding: 5,
  },
  sectionHeaderLabel: {
    color: 'black',
  },
  indexLetterStyle: {
    color: 'blue',
    fontSize: 15,
  },
};

export default class AlphabetListWithSearch extends React.Component {
  state = {
    searchString: '',
    finalData: data,
  };

  setupData = text => {
    this.setState({
      searchString: text,
      finalData:
        typeof text === 'string' && text?.length
          ? data.filter(item => item.value.includes(text))
          : data,
    });
  };

  renderCustomItem = ({item}) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemLabel}>{item.value}</Text>
    </View>
  );

  renderCustomSectionHeader = ({section}) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          onChangeText={this.setupData}
          style={{backgroundColor: 'rgba(255,0,0,0.1)'}}
        />
        <Text>DataLength: {this.state.finalData.length}</Text>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={this.state.finalData}
          renderItem={this.renderCustomItem}
          renderSectionHeader={this.renderCustomSectionHeader}
        />
      </View>
    );
  }
}
