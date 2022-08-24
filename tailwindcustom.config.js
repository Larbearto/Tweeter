/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        StrongCyan: '#26C0AB',
        VeryDarkCyan: '#00494D',
        DirtyGreen: '#5E7A7D',
        MuddyGreen: '#7F9C9F',
        SoftGreen: '#C5E4E7',
        SuperLightGray: '#F4FAFA',
        Whitish: '#ecf0f3',
        Navyish: '#1f2937',
        PastelPurple: '#5651e5',
        PastelBlue: '#709dff',
        GlossyWhite: '#ecf0f3',
        TwitterGray: '#6e767d',
        Platinum: '#E8E8E8',
        MatteBlack: '#171717',
        ChalkyBlack: '#333333',
        Charcoal: '#36454F',
        DarkGreen: '#023020',
        DarkPurple: '#301934',
        JetBlack: '#343434',
        Licorice: '#1B1212',
        MatteBlacky: '#28282B',
        MidnightBlue: '#191970',
        TwitterBlue: '#1d9bf0',
        Onyx: '#353935',
        MatteCarminePink: '#A06570',
        MatteAnthraciteCharcoal: '#35383B',
        MatteTaupeBrown: '#403833',
        MatteCoralOrange: '#E1775D',
        MatteMint: '#6EA893',
        MattePlumPurple: '#B388B2',
        SolidMatteGray: '#757574',
        MatteLightPink: '#D99090',
        MatteDarkRed: '#761F17',
        MatteCyan: '#0EB8BE',
        MatteAqua: '#99D1D5',
        MatteOlive: '#998F7F'
      }
    },
    plugins: []
  }
}
