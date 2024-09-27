import React from "react";
import { FormField } from "../components/FormField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

let initialVal = {
  name: "",
  email: "",
  message: "",
  school: "",
  country: "",
  state: "",
  designation: "",
  phone: "",
};

export const FormEarlyBird = () => {
  let [form, setForm] = useState(initialVal);
  let [error, setError] = useState(initialVal);
  let [global, setGlobal] = useState("");

  const countryOptions = [
    { value: 'af', label: 'Afghanistan' },
    { value: 'al', label: 'Albania' },
    { value: 'dz', label: 'Algeria' },
    { value: 'as', label: 'American Samoa' },
    { value: 'ad', label: 'Andorra' },
    { value: 'ao', label: 'Angola' },
    { value: 'ai', label: 'Anguilla' },
    { value: 'aq', label: 'Antarctica' },
    { value: 'ag', label: 'Antigua and Barbuda' },
    { value: 'ar', label: 'Argentina' },
    { value: 'am', label: 'Armenia' },
    { value: 'aw', label: 'Aruba' },
    { value: 'au', label: 'Australia' },
    { value: 'at', label: 'Austria' },
    { value: 'az', label: 'Azerbaijan' },
    { value: 'bs', label: 'Bahamas' },
    { value: 'bh', label: 'Bahrain' },
    { value: 'bd', label: 'Bangladesh' },
    { value: 'bb', label: 'Barbados' },
    { value: 'by', label: 'Belarus' },
    { value: 'be', label: 'Belgium' },
    { value: 'bz', label: 'Belize' },
    { value: 'bj', label: 'Benin' },
    { value: 'bm', label: 'Bermuda' },
    { value: 'bt', label: 'Bhutan' },
    { value: 'bo', label: 'Bolivia' },
    { value: 'ba', label: 'Bosnia and Herzegovina' },
    { value: 'bw', label: 'Botswana' },
    { value: 'bv', label: 'Bouvet Island' },
    { value: 'br', label: 'Brazil' },
    { value: 'io', label: 'British Indian Ocean Territory' },
    { value: 'bn', label: 'Brunei Darussalam' },
    { value: 'bg', label: 'Bulgaria' },
    { value: 'bf', label: 'Burkina Faso' },
    { value: 'bi', label: 'Burundi' },
    { value: 'cv', label: 'Cabo Verde' },
    { value: 'kh', label: 'Cambodia' },
    { value: 'cm', label: 'Cameroon' },
    { value: 'ca', label: 'Canada' },
    { value: 'ky', label: 'Cayman Islands' },
    { value: 'cf', label: 'Central African Republic' },
    { value: 'td', label: 'Chad' },
    { value: 'cl', label: 'Chile' },
    { value: 'cn', label: 'China' },
    { value: 'cx', label: 'Christmas Island' },
    { value: 'cc', label: 'Cocos (Keeling) Islands' },
    { value: 'co', label: 'Colombia' },
    { value: 'km', label: 'Comoros' },
    { value: 'cg', label: 'Congo' },
    { value: 'cd', label: 'Congo, Democratic Republic of the' },
    { value: 'ck', label: 'Cook Islands' },
    { value: 'cr', label: 'Costa Rica' },
    { value: 'hr', label: 'Croatia' },
    { value: 'cu', label: 'Cuba' },
    { value: 'cy', label: 'Cyprus' },
    { value: 'cz', label: 'Czech Republic' },
    { value: 'dk', label: 'Denmark' },
    { value: 'dj', label: 'Djibouti' },
    { value: 'dm', label: 'Dominica' },
    { value: 'do', label: 'Dominican Republic' },
    { value: 'ec', label: 'Ecuador' },
    { value: 'eg', label: 'Egypt' },
    { value: 'sv', label: 'El Salvador' },
    { value: 'gq', label: 'Equatorial Guinea' },
    { value: 'er', label: 'Eritrea' },
    { value: 'ee', label: 'Estonia' },
    { value: 'sz', label: 'Eswatini' },
    { value: 'et', label: 'Ethiopia' },
    { value: 'fk', label: 'Falkland Islands' },
    { value: 'fo', label: 'Faroe Islands' },
    { value: 'fj', label: 'Fiji' },
    { value: 'fi', label: 'Finland' },
    { value: 'fr', label: 'France' },
    { value: 'gf', label: 'French Guiana' },
    { value: 'pf', label: 'French Polynesia' },
    { value: 'tf', label: 'French Southern Territories' },
    { value: 'ga', label: 'Gabon' },
    { value: 'gm', label: 'Gambia' },
    { value: 'ge', label: 'Georgia' },
    { value: 'de', label: 'Germany' },
    { value: 'gh', label: 'Ghana' },
    { value: 'gi', label: 'Gibraltar' },
    { value: 'gr', label: 'Greece' },
    { value: 'gl', label: 'Greenland' },
    { value: 'gd', label: 'Grenada' },
    { value: 'gp', label: 'Guadeloupe' },
    { value: 'gu', label: 'Guam' },
    { value: 'gt', label: 'Guatemala' },
    { value: 'gn', label: 'Guinea' },
    { value: 'gw', label: 'Guinea-Bissau' },
    { value: 'gy', label: 'Guyana' },
    { value: 'ht', label: 'Haiti' },
    { value: 'hm', label: 'Heard Island and McDonald Islands' },
    { value: 'va', label: 'Holy See' },
    { value: 'hn', label: 'Honduras' },
    { value: 'hk', label: 'Hong Kong' },
    { value: 'hu', label: 'Hungary' },
    { value: 'is', label: 'Iceland' },
    { value: 'in', label: 'India' },
    { value: 'id', label: 'Indonesia' },
    { value: 'ir', label: 'Iran' },
    { value: 'iq', label: 'Iraq' },
    { value: 'ie', label: 'Ireland' },
    { value: 'im', label: 'Isle of Man' },
    { value: 'il', label: 'Israel' },
    { value: 'it', label: 'Italy' },
    { value: 'jm', label: 'Jamaica' },
    { value: 'jp', label: 'Japan' },
    { value: 'je', label: 'Jersey' },
    { value: 'jo', label: 'Jordan' },
    { value: 'kz', label: 'Kazakhstan' },
    { value: 'ke', label: 'Kenya' },
    { value: 'ki', label: 'Kiribati' },
    { value: 'kp', label: 'Korea, Democratic People\'s Republic of' },
    { value: 'kr', label: 'Korea, Republic of' },
    { value: 'kw', label: 'Kuwait' },
    { value: 'kg', label: 'Kyrgyzstan' },
    { value: 'la', label: 'Lao People\'s Democratic Republic' },
    { value: 'lv', label: 'Latvia' },
    { value: 'lb', label: 'Lebanon' },
    { value: 'ls', label: 'Lesotho' },
    { value: 'lr', label: 'Liberia' },
    { value: 'ly', label: 'Libya' },
    { value: 'li', label: 'Liechtenstein' },
    { value: 'lt', label: 'Lithuania' },
    { value: 'lu', label: 'Luxembourg' },
    { value: 'mo', label: 'Macao' },
    { value: 'mg', label: 'Madagascar' },
    { value: 'mw', label: 'Malawi' },
    { value: 'my', label: 'Malaysia' },
    { value: 'mv', label: 'Maldives' },
    { value: 'ml', label: 'Mali' },
    { value: 'mt', label: 'Malta' },
    { value: 'mh', label: 'Marshall Islands' },
    { value: 'mq', label: 'Martinique' },
    { value: 'mr', label: 'Mauritania' },
    { value: 'mu', label: 'Mauritius' },
    { value: 'yt', label: 'Mayotte' },
    { value: 'mx', label: 'Mexico' },
    { value: 'fm', label: 'Micronesia' },
    { value: 'md', label: 'Moldova' },
    { value: 'mc', label: 'Monaco' },
    { value: 'mn', label: 'Mongolia' },
    { value: 'ms', label: 'Montserrat' },
    { value: 'ma', label: 'Morocco' },
    { value: 'mz', label: 'Mozambique' },
    { value: 'mm', label: 'Myanmar' },
    { value: 'na', label: 'Namibia' },
    { value: 'nr', label: 'Nauru' },
    { value: 'np', label: 'Nepal' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'nc', label: 'New Caledonia' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'ni', label: 'Nicaragua' },
    { value: 'ne', label: 'Niger' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'nu', label: 'Niue' },
    { value: 'nf', label: 'Norfolk Island' },
    { value: 'mp', label: 'Northern Mariana Islands' },
    { value: 'no', label: 'Norway' },
    { value: 'om', label: 'Oman' },
    { value: 'pk', label: 'Pakistan' },
    { value: 'pw', label: 'Palau' },
    { value: 'ps', label: 'Palestine, State of' },
    { value: 'pa', label: 'Panama' },
    { value: 'pg', label: 'Papua New Guinea' },
    { value: 'py', label: 'Paraguay' },
    { value: 'pe', label: 'Peru' },
    { value: 'ph', label: 'Philippines' },
    { value: 'pn', label: 'Pitcairn' },
    { value: 'pl', label: 'Poland' },
    { value: 'pt', label: 'Portugal' },
    { value: 'pr', label: 'Puerto Rico' },
    { value: 'qa', label: 'Qatar' },
    { value: 're', label: 'Réunion' },
    { value: 'ro', label: 'Romania' },
    { value: 'ru', label: 'Russia' },
    { value: 'rw', label: 'Rwanda' },
    { value: 'bl', label: 'Saint Barthélemy' },
    { value: 'sh', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    { value: 'kn', label: 'Saint Kitts and Nevis' },
    { value: 'lc', label: 'Saint Lucia' },
    { value: 'mf', label: 'Saint Martin (French part)' },
    { value: 'pm', label: 'Saint Pierre and Miquelon' },
    { value: 'vc', label: 'Saint Vincent and the Grenadines' },
    { value: 'ws', label: 'Samoa' },
    { value: 'sm', label: 'San Marino' },
    { value: 'st', label: 'Sao Tome and Principe' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'sn', label: 'Senegal' },
    { value: 'rs', label: 'Serbia' },
    { value: 'sc', label: 'Seychelles' },
    { value: 'sl', label: 'Sierra Leone' },
    { value: 'sg', label: 'Singapore' },
    { value: 'sx', label: 'Sint Maarten (Dutch part)' },
    { value: 'sk', label: 'Slovakia' },
    { value: 'si', label: 'Slovenia' },
    { value: 'sb', label: 'Solomon Islands' },
    { value: 'so', label: 'Somalia' },
    { value: 'za', label: 'South Africa' },
    { value: 'gs', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'ss', label: 'South Sudan' },
    { value: 'es', label: 'Spain' },
    { value: 'lk', label: 'Sri Lanka' },
    { value: 'sd', label: 'Sudan' },
    { value: 'sr', label: 'Suriname' },
    { value: 'sj', label: 'Svalbard and Jan Mayen' },
    { value: 'sz', label: 'Sweden' },
    { value: 'ch', label: 'Switzerland' },
    { value: 'sy', label: 'Syrian Arab Republic' },
    { value: 'tw', label: 'Taiwan' },
    { value: 'tj', label: 'Tajikistan' },
    { value: 'tz', label: 'Tanzania' },
    { value: 'th', label: 'Thailand' },
    { value: 'tl', label: 'Timor-Leste' },
    { value: 'tg', label: 'Togo' },
    { value: 'tk', label: 'Tokelau' },
    { value: 'to', label: 'Tonga' },
    { value: 'tt', label: 'Trinidad and Tobago' },
    { value: 'tn', label: 'Tunisia' },
    { value: 'tr', label: 'Turkey' },
    { value: 'tm', label: 'Turkmenistan' },
    { value: 'tc', label: 'Turks and Caicos Islands' },
    { value: 'tv', label: 'Tuvalu' },
    { value: 'ug', label: 'Uganda' },
    { value: 'ua', label: 'Ukraine' },
    { value: 'ae', label: 'United Arab Emirates' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
    { value: 'uy', label: 'Uruguay' },
    { value: 'uz', label: 'Uzbekistan' },
    { value: 'vu', label: 'Vanuatu' },
    { value: 've', label: 'Venezuela' },
    { value: 'vn', label: 'Vietnam' },
    { value: 'wf', label: 'Wallis and Futuna' },
    { value: 'eh', label: 'Western Sahara' },
    { value: 'ye', label: 'Yemen' },
    { value: 'zm', label: 'Zambia' },
    { value: 'zw', label: 'Zimbabwe' }
  ];

  const stateOptions = {
    // Australia
    au: [
      { value: 'act', label: 'Australian Capital Territory' },
      { value: 'nsw', label: 'New South Wales' },
      { value: 'nt', label: 'Northern Territory' },
      { value: 'qld', label: 'Queensland' },
      { value: 'sa', label: 'South Australia' },
      { value: 'tas', label: 'Tasmania' },
      { value: 'vic', label: 'Victoria' },
      { value: 'wa', label: 'Western Australia' },
    ],
    // Austria
    at: [
      { value: 'burgenland', label: 'Burgenland' },
      { value: 'carinthia', label: 'Carinthia' },
      { value: 'lower-austria', label: 'Lower Austria' },
      { value: 'upper-austria', label: 'Upper Austria' },
      { value: 'salzburg', label: 'Salzburg' },
      { value: 'styria', label: 'Styria' },
      { value: 'tyrol', label: 'Tyrol' },
      { value: 'vorarlberg', label: 'Vorarlberg' },
      { value: 'vienna', label: 'Vienna' },
    ],
    // Brazil
    br: [
      { value: 'ac', label: 'Acre' },
      { value: 'al', label: 'Alagoas' },
      { value: 'ap', label: 'Amapá' },
      { value: 'am', label: 'Amazonas' },
      { value: 'ba', label: 'Bahia' },
      { value: 'ce', label: 'Ceará' },
      { value: 'es', label: 'Espírito Santo' },
      { value: 'go', label: 'Goiás' },
      { value: 'ma', label: 'Maranhão' },
      { value: 'mt', label: 'Mato Grosso' },
      { value: 'ms', label: 'Mato Grosso do Sul' },
      { value: 'mg', label: 'Minas Gerais' },
      { value: 'pa', label: 'Pará' },
      { value: 'pb', label: 'Paraíba' },
      { value: 'pr', label: 'Paraná' },
      { value: 'pe', label: 'Pernambuco' },
      { value: 'pi', label: 'Piauí' },
      { value: 'rj', label: 'Rio de Janeiro' },
      { value: 'rn', label: 'Rio Grande do Norte' },
      { value: 'rs', label: 'Rio Grande do Sul' },
      { value: 'ro', label: 'Rondônia' },
      { value: 'rr', label: 'Roraima' },
      { value: 'sc', label: 'Santa Catarina' },
      { value: 'sp', label: 'São Paulo' },
      { value: 'se', label: 'Sergipe' },
      { value: 'to', label: 'Tocantins' },
    ],
    // Canada
    ca: [
      { value: 'ab', label: 'Alberta' },
      { value: 'bc', label: 'British Columbia' },
      { value: 'mb', label: 'Manitoba' },
      { value: 'nb', label: 'New Brunswick' },
      { value: 'nl', label: 'Newfoundland and Labrador' },
      { value: 'ns', label: 'Nova Scotia' },
      { value: 'on', label: 'Ontario' },
      { value: 'pe', label: 'Prince Edward Island' },
      { value: 'qc', label: 'Quebec' },
      { value: 'sk', label: 'Saskatchewan' },
      { value: 'yt', label: 'Yukon' },
      { value: 'nt', label: 'Northwest Territories' },
      { value: 'nu', label: 'Nunavut' },
    ],
    // China
    cn: [
      { value: 'ah', label: 'Anhui' },
      { value: 'bj', label: 'Beijing' },
      { value: 'cq', label: 'Chongqing' },
      { value: 'fj', label: 'Fujian' },
      { value: 'gs', label: 'Gansu' },
      { value: 'gd', label: 'Guangdong' },
      { value: 'gx', label: 'Guangxi' },
      { value: 'gz', label: 'Guizhou' },
      { value: 'ha', label: 'Hainan' },
      { value: 'hb', label: 'Hebei' },
      { value: 'hl', label: 'Heilongjiang' },
      { value: 'hn', label: 'Henan' },
      { value: 'hb', label: 'Hubei' },
      { value: 'hn', label: 'Hunan' },
      { value: 'js', label: 'Jiangsu' },
      { value: 'jx', label: 'Jiangxi' },
      { value: 'jl', label: 'Jilin' },
      { value: 'ln', label: 'Liaoning' },
      { value: 'nx', label: 'Ningxia' },
      { value: 'qh', label: 'Qinghai' },
      { value: 'sn', label: 'Shaanxi' },
      { value: 'sd', label: 'Shandong' },
      { value: 'sx', label: 'Shanxi' },
      { value: 'sc', label: 'Sichuan' },
      { value: 'tj', label: 'Tianjin' },
      { value: 'xz', label: 'Tibet' },
      { value: 'xj', label: 'Xinjiang' },
      { value: 'yn', label: 'Yunnan' },
      { value: 'zj', label: 'Zhejiang' },
      { value: 'hk', label: 'Hong Kong' },
      { value: 'mo', label: 'Macau' },
    ],
    // France
    fr: [
      { value: 'auvergne-rhone-alpes', label: 'Auvergne-Rhône-Alpes' },
      { value: 'bourgogne-franche-comte', label: 'Bourgogne-Franche-Comté' },
      { value: 'bretagne', label: 'Brittany' },
      { value: 'centre-val-de-loire', label: 'Centre-Val de Loire' },
      { value: 'corse', label: 'Corsica' },
      { value: 'grand-est', label: 'Grand Est' },
      { value: 'hauts-de-france', label: 'Hauts-de-France' },
      { value: 'ile-de-france', label: 'Île-de-France' },
      { value: 'normandie', label: 'Normandy' },
      { value: 'nouvelle-aquitaine', label: 'Nouvelle-Aquitaine' },
      { value: 'occitanie', label: 'Occitanie' },
      { value: 'pays-de-la-loire', label: 'Pays de la Loire' },
      { value: 'provence-alpes-cote-d-azur', label: 'Provence-Alpes-Côte d\'Azur' },
      { value: 'region-sud', label: 'Region Sud' },
    ],
    // Germany
    de: [
      { value: 'baden-wuerttemberg', label: 'Baden-Württemberg' },
      { value: 'bavaria', label: 'Bavaria' },
      { value: 'berlin', label: 'Berlin' },
      { value: 'brandenburg', label: 'Brandenburg' },
      { value: 'bremen', label: 'Bremen' },
      { value: 'hamburg', label: 'Hamburg' },
      { value: 'hesse', label: 'Hesse' },
      { value: 'mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
      { value: 'lower-saxony', label: 'Lower Saxony' },
      { value: 'north-rhine-westphalia', label: 'North Rhine-Westphalia' },
      { value: 'rheinland-pfalz', label: 'Rhineland-Palatinate' },
      { value: 'saarland', label: 'Saarland' },
      { value: 'saxony', label: 'Saxony' },
      { value: 'saxony-anhalt', label: 'Saxony-Anhalt' },
      { value: 'schleswig-holstein', label: 'Schleswig-Holstein' },
      { value: 'thuringia', label: 'Thuringia' },
    ],
    // India
    in: [
      { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
      { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
      { value: 'assam', label: 'Assam' },
      { value: 'bihar', label: 'Bihar' },
      { value: 'chhattisgarh', label: 'Chhattisgarh' },
      { value: 'goa', label: 'Goa' },
      { value: 'gujarat', label: 'Gujarat' },
      { value: 'haryana', label: 'Haryana' },
      { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
      { value: 'jammu-and-kashmir', label: 'Jammu and Kashmir' },
      { value: 'jharkhand', label: 'Jharkhand' },
      { value: 'karnataka', label: 'Karnataka' },
      { value: 'kerala', label: 'Kerala' },
      { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
      { value: 'maharashtra', label: 'Maharashtra' },
      { value: 'manipur', label: 'Manipur' },
      { value: 'meghalaya', label: 'Meghalaya' },
      { value: 'mizoram', label: 'Mizoram' },
      { value: 'nagaland', label: 'Nagaland' },
      { value: 'odisha', label: 'Odisha' },
      { value: 'punjab', label: 'Punjab' },
      { value: 'rajasthan', label: 'Rajasthan' },
      { value: 'sikkim', label: 'Sikkim' },
      { value: 'tamil-nadu', label: 'Tamil Nadu' },
      { value: 'telangana', label: 'Telangana' },
      { value: 'tripura', label: 'Tripura' },
      { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
      { value: 'uttarakhand', label: 'Uttarakhand' },
      { value: 'west-bengal', label: 'West Bengal' },
      { value: 'andaman-and-nicobar-islands', label: 'Andaman and Nicobar Islands' },
      { value: 'chandigarh', label: 'Chandigarh' },
      { value: 'dadra-and-nagar-haveli-and-daman-and-diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
      { value: 'delhi', label: 'Delhi' },
      { value: 'lakshadweep', label: 'Lakshadweep' },
      { value: 'puducherry', label: 'Puducherry' },
    ],
    // Italy
    it: [
      { value: 'abruzzo', label: 'Abruzzo' },
      { value: 'aosta-valley', label: 'Aosta Valley' },
      { value: 'basilicata', label: 'Basilicata' },
      { value: 'calabria', label: 'Calabria' },
      { value: 'campania', label: 'Campania' },
      { value: 'emilia-romagna', label: 'Emilia-Romagna' },
      { value: 'friuli-venezia-giulia', label: 'Friuli-Venezia Giulia' },
      { value: 'lazio', label: 'Lazio' },
      { value: 'liguria', label: 'Liguria' },
      { value: 'lombardy', label: 'Lombardy' },
      { value: 'marche', label: 'Marche' },
      { value: 'molise', label: 'Molise' },
      { value: 'piedmont', label: 'Piedmont' },
      { value: 'sardinia', label: 'Sardinia' },
      { value: 'sicily', label: 'Sicily' },
      { value: 'trentino-alto-adige-sudtirol', label: 'Trentino-Alto Adige/Südtirol' },
      { value: 'tuscany', label: 'Tuscany' },
      { value: 'umbria', label: 'Umbria' },
      { value: 'veneto', label: 'Veneto' },
    ],
    // Mexico
    mx: [
      { value: 'ags', label: 'Aguascalientes' },
      { value: 'bc', label: 'Baja California' },
      { value: 'bcs', label: 'Baja California Sur' },
      { value: 'camp', label: 'Campeche' },
      { value: 'chiapas', label: 'Chiapas' },
      { value: 'chih', label: 'Chihuahua' },
      { value: 'coah', label: 'Coahuila' },
      { value: 'col', label: 'Colima' },
      { value: 'cdmx', label: 'Ciudad de México' },
      { value: 'dgo', label: 'Durango' },
      { value: 'gto', label: 'Guanajuato' },
      { value: 'gro', label: 'Guerrero' },
      { value: 'hid', label: 'Hidalgo' },
      { value: 'jal', label: 'Jalisco' },
      { value: 'mex', label: 'México' },
      { value: 'mic', label: 'Michoacán de Ocampo' },
      { value: 'mor', label: 'Morelos' },
      { value: 'nay', label: 'Nayarit' },
      { value: 'nl', label: 'Nuevo León' },
      { value: 'oax', label: 'Oaxaca' },
      { value: 'pue', label: 'Puebla' },
      { value: 'qro', label: 'Querétaro' },
      { value: 'qroo', label: 'Quintana Roo' },
      { value: 'slp', label: 'San Luis Potosí' },
      { value: 'sin', label: 'Sinaloa' },
      { value: 'son', label: 'Sonora' },
      { value: 'tab', label: 'Tabasco' },
      { value: 'tam', label: 'Tamaulipas' },
      { value: 'tlax', label: 'Tlaxcala' },
      { value: 'ver', label: 'Veracruz' },
      { value: 'yuc', label: 'Yucatán' },
      { value: 'zac', label: 'Zacatecas' },
    ],
    // Russia
    ru: [
      { value: 'ada', label: 'Adygea' },
      { value: 'alt', label: 'Altai Krai' },
      { value: 'alt', label: 'Altai Republic' },
      { value: 'amur', label: 'Amur Oblast' },
      { value: 'ark', label: 'Arkhangelsk Oblast' },
      { value: 'ast', label: 'Astrakhan Oblast' },
      { value: 'bash', label: 'Bashkortostan' },
      { value: 'bel', label: 'Belgorod Oblast' },
      { value: 'bry', label: 'Bryansk Oblast' },
      { value: 'bur', label: 'Buryatia' },
      { value: 'che', label: 'Chechnya' },
      { value: 'che', label: 'Chelyabinsk Oblast' },
      { value: 'chu', label: 'Chuvashia' },
      { value: 'dag', label: 'Dagestan' },
      { value: 'vlg', label: 'Volgograd Oblast' },
      { value: 'vld', label: 'Vladimir Oblast' },
      { value: 'vor', label: 'Voronezh Oblast' },
      { value: 'irk', label: 'Irkutsk Oblast' },
      { value: 'iva', label: 'Ivanovo Oblast' },
      { value: 'kab', label: 'Kabardino-Balkaria' },
      { value: 'kal', label: 'Kaliningrad Oblast' },
      { value: 'kal', label: 'Kalmykia' },
      { value: 'kam', label: 'Kamchatka Krai' },
      { value: 'kar', label: 'Karachay-Cherkessia' },
      { value: 'kare', label: 'Karelia' },
      { value: 'kem', label: 'Kemerovo Oblast' },
      { value: 'kha', label: 'Khakassia' },
      { value: 'kbr', label: 'Kabardino-Balkaria' },
      { value: 'kgn', label: 'Kaluga Oblast' },
      { value: 'kal', label: 'Kalmykia' },
      { value: 'kam', label: 'Kamchatka Krai' },
      { value: 'kar', label: 'Karachay-Cherkessia' },
      { value: 'kare', label: 'Karelia' },
      { value: 'kem', label: 'Kemerovo Oblast' },
      { value: 'kha', label: 'Khakassia' },
      { value: 'kgn', label: 'Kaluga Oblast' },
      { value: 'kirov', label: 'Kirov Oblast' },
      { value: 'kost', label: 'Kostroma Oblast' },
      { value: 'kras', label: 'Krasnodar Krai' },
      { value: 'kras', label: 'Krasnoyarsk Krai' },
      { value: 'kur', label: 'Kursk Oblast' },
      { value: 'kv', label: 'Komi Republic' },
      { value: 'len', label: 'Leningrad Oblast' },
      { value: 'lip', label: 'Lipetsk Oblast' },
      { value: 'mag', label: 'Magadan Oblast' },
      { value: 'mar', label: 'Mari El' },
      { value: 'mord', label: 'Mordovia' },
      { value: 'msk', label: 'Moscow Oblast' },
      { value: 'mro', label: 'Murmansk Oblast' },
      { value: 'nen', label: 'Nenets Autonomous Okrug' },
      { value: 'nizh', label: 'Nizhny Novgorod Oblast' },
      { value: 'nov', label: 'Novosibirsk Oblast' },
      { value: 'omsk', label: 'Omsk Oblast' },
      { value: 'ore', label: 'Orenburg Oblast' },
      { value: 'oryol', label: 'Oryol Oblast' },
      { value: 'pen', label: 'Penza Oblast' },
      { value: 'perm', label: 'Perm Krai' },
      { value: 'pri', label: 'Primorsky Krai' },
      { value: 'pskov', label: 'Pskov Oblast' },
      { value: 'ros', label: 'Rostov Oblast' },
      { value: 'ryaz', label: 'Ryazan Oblast' },
      { value: 'sakha', label: 'Sakha (Yakutia)' },
      { value: 'sam', label: 'Samara Oblast' },
      { value: 'sar', label: 'Saratov Oblast' },
      { value: 'skt', label: 'Sakhalin Oblast' },
      { value: 'sverd', label: 'Sverdlovsk Oblast' },
      { value: 'spb', label: 'Saint Petersburg' },
      { value: 'stv', label: 'Stavropol Krai' },
      { value: 'tam', label: 'Tambov Oblast' },
      { value: 'tav', label: 'Tatarstan' },
      { value: 'tyum', label: 'Tyumen Oblast' },
      { value: 'udm', label: 'Udmurtia' },
      { value: 'uln', label: 'Ulyanovsk Oblast' },
      { value: 'vla', label: 'Vladimir Oblast' },
      { value: 'vlg', label: 'Volgograd Oblast' },
      { value: 'vlg', label: 'Vologda Oblast' },
      { value: 'vor', label: 'Voronezh Oblast' },
      { value: 'yam', label: 'Yamalo-Nenets Autonomous Okrug' },
      { value: 'yar', label: 'Yaroslavl Oblast' },
      { value: 'esh', label: 'Essex' },
      { value: 'gloucestershire', label: 'Gloucestershire' },
      { value: 'ham', label: 'Hampshire' },
      { value: 'kent', label: 'Kent' },
      { value: 'lan', label: 'Lancashire' },
      { value: 'lin', label: 'Lincolnshire' },
      { value: 'london', label: 'London' },
      { value: 'mid', label: 'Middlesex' },
      { value: 'nor', label: 'Norfolk' },
      { value: 'not', label: 'Nottinghamshire' },
      { value: 'oxf', label: 'Oxfordshire' },
      { value: 'shrop', label: 'Shropshire' },
      { value: 'som', label: 'Somerset' },
      { value: 'sur', label: 'Surrey' },
      { value: 'sus', label: 'Sussex' },
      { value: 'war', label: 'Warwickshire' },
      { value: 'wes', label: 'West Midlands' },
      { value: 'wil', label: 'Wiltshire' },
      { value: 'wor', label: 'Worcestershire' },
      { value: 'yor', label: 'Yorkshire' },
      { value: 'yorks', label: 'Yorkshire' },
    ]
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null); // Reset state selection when country changes
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {

      case "name":
        // name should just accept alphabets and spaces
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            name: "Name is required",
          }))
          : setError((prevError) => ({ ...prevError, name: "" }));
        let n = value;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: n.replace(/[^A-Za-z\s.]/g, ""),
        }));
        break;

      case "email":
        value.trim() === "" || !value.includes("@") || !value.includes(".")
          ? setError((prevError) => ({
            ...prevError,
            email: "Email is invalid",
          }))
          : setError((prevError) => ({ ...prevError, email: "" }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;

      case "phone":
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            phone: "Phone is required",
          }))
          : setError((prevError) => ({ ...prevError, phone: "" }));

        setForm((prevForm) => ({
          ...prevForm,
          [name]: value.replace(/[^0-9]/g, ""),
        }));
        break;

      case "designation":
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            designation: "Designation is required",
          }))
          : setError((prevError) => ({
            ...prevError,
            designation: "",
          }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;

      default:
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
    }
  };

  const validateRequiredFields = () => {
    const requiredFields = ["name", "phone", "email"];
    let isValid = true;
    let newErrorState = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrorState[field] = `${field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
        isValid = false;
      } else {
        newErrorState[field] = "";
      }
    });

    setError((prevError) => ({ ...prevError, ...newErrorState }));

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateRequiredFields()) {
      let msg = `Country: ${form.country}\n\n State: ${form.state}\n\n Phone: ${form.phone}\n\n Designation: ${form.designation}\n\n School: ${form.school}\n\n `;
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          { name: form.name, email: form.email, message: msg },
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          setGlobal("Thanks for contacting us, we will get back to you soon!");
          setForm(initialVal);
          setTimeout(() => {
            setGlobal("");
          }, 5000);
        });
    }
  };

  return (
    <form action="" className="grid-2" onSubmit={handleSubmit}>
      <FormField
        placeholder="Name*"
        name="name"
        value={form.name}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.name}
      />
      <FormField
        placeholder="Email*"
        name="email"
        className="col-2"
        value={form.email}
        onChange={handleChange}
        errorMessage={error.email}
      />
      <FormField
        placeholder="Phone No*"
        name="phone"
        value={form.phone}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.phone}
      />
      <FormField
        placeholder="School Name"
        name="school"
        value={form.school}
        onChange={handleChange}
        errorMessage={error.school}
        className="col-2"
      />
      <FormField
        placeholder="Designation"
        name="designation"
        className="col-2"
        value={form.designation}
        onChange={handleChange}
        errorMessage={error.designation}
      />

      <FormField
        placeholder="Country"
        name="country"
        value={form.country}
        onChange={handleChange}
        errorMessage={error.country}
      />
      <FormField
        placeholder="State"
        name="state"
        value={form.state}
        onChange={handleChange}
        errorMessage={error.state}
      />

      {/* <Select
        options={countryOptions}
        menuPosition="right"
        onChange={handleCountryChange}
        placeholder="Select a country..."
        className="selectDropdown"
        classNamePrefix="selectDropdownInner"
      />
      {selectedCountry && (
        <Select
          options={stateOptions[selectedCountry.value] || []}
          onChange={handleStateChange}
          placeholder="Select a state..."
          className="selectDropdown"
          classNamePrefix="selectDropdownInner"
        />
      )} */}

      {/* <FormField
        type="textarea"
        placeholder="Message* "
        name="message"
        value={form.message}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.message}
      /> */}
      <p className="form-success col-2">{global}</p>

      <div className="form-btn col-2    ">
        <button className="btn btn-secondary">
          Send
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92473 3.52487L15.0581 7.09153C18.2581 8.69153 18.2581 11.3082 15.0581 12.9082L7.92473 16.4749C3.12473 18.8749 1.1664 16.9082 3.5664 12.1165L4.2914 10.6749C4.47473 10.3082 4.47473 9.69987 4.2914 9.3332L3.5664 7.8832C1.1664 3.09153 3.13306 1.12487 7.92473 3.52487Z"
              stroke="#9EA0A8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5332 10H9.0332"
              stroke="#9EA0A8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
