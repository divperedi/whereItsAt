# Instruktioner

## Klona eller ladda ner mappen
## Kör 'npm install'


# Använda Hooks och Externa Bibliotek

## React Hooks

### useParams: Använde för att hämta parametrar från URL på EventPage komponent. Den hämtar parametern id från URL för att hämta och visa detaljer för ett specifikt evenemang.

### useNavigate: Används i komponenter EventsPage och OrderPage för navigering mellan olika routes. Möjliggör navigering till beställningssidan efter att ha valt evenemang eller biljetter.

## Externa Bibliotek

### @mui/material: Bibliotek har olika UI komponenter som Typography, Table, Button och Box, vilka används i applikationen för att skapa tabeller, knappar och textformatering. De erbjuder enhetlig stil och funktionalitet, vilket förbättrar användarupplevelsen.

### styled-components: Använde för att styla specifika komponenter. ThemeProvider från styled-components hjälper att byta bakgrund färg beroende på vilken sida vi befinner oss, vilket säkerställer en sammanhängande design.

### jsbarcode: Genererar streckkoder för biljetter dynamiskt. Applikationen kan skapa unika streckkoder för varje biljett, vilket förbättrar biljettvalidering och spårning ifall det var riktigt användbar applikation, annars är det bara kul grej.

### react-swipeable: Använde för att möjliggöra swiping för navigering mellan sidor. Det förbättrar användarupplevelsen, genom att erbjuda ett intuitivt sätt att växla mellan olika vy.

## Varför de?

### useParams: Visar detaljer för olika evenemang baserat på webbadressen därför är det perfekt att använda useParams för att enkelt hämta och visa rätt information för varje evenemang.

### useNavigate: Det förenklar navigeringen inom applikationen genom att erbjuda ett bekvämt sätt att omdirigera användare till olika routes. Detta är särskilt användbart för att hantera användarinteraktioner som att lägga till objekt i varukorgen eller gå till kassan.

### @mui/material: Material UI bibliotek erbjuder förformaterade UI komponenter. Det ger applikationen en modern och enhetlig utseende.

### styled-components: Det underlättar skapandet av stylade komponenter med omfattande CSS. Genom att kapsla in stilar inom komponenter minskar det risken för stilkonflikter och gör det enklare att hantera komplexa stylingkrav.

### jsbarcode: Integrationen av streckkodsgenereringsfunktionen förbättrar biljettsystemet genom att tillhandahålla en unik identifierare för varje biljett. 

### react-swipeable: Förbättrar användbarhet och user upplevelse av mobilanvändare.