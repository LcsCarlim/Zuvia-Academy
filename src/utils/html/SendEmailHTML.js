module.exports = code => {
  return `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
      <style>
        body {
          font-family: 'Montserrat';
          text-size-adjust:100%;
          -webkit-text-size-adjust:100%;
          -ms-text-size-adjust:100%;
        }
        .header {
          background-color:#1A1D56;
          padding: 29px 4%;
          color:#ffffff;
          font-size:14px;
          text-align:center;
          font-weight:bold;
          vertical-align: center;
        }
        .footer {
          background-color:#f0eff7;
          padding: 0.25% 4%;
          color:#666666;
          font-size:14px;
          text-align:center;
        }
        .verify-code {
          margin: 0% 22%;
          background-color: #f0eff7;
          border-radius: 25px;
          align-content: center;
          padding: 2% 1%;
        }
        .verify-code p {
          margin: 0% auto;
          font-size: 44px;
          padding-left: 13%;
          font-weight: 700;
          letter-spacing: 1em;
          text-align: center;
          align-self: center;
        }
        @media screen and (min-width: 200px) {
          .verify-code {
            margin: 0% 10%;
            background-color: #f0eff7;
            border-radius: 12px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 10% auto;
            font-size: 20px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 400px) {
          .verify-code {
            margin: 0% 20%;
            background-color: #f0eff7;
            border-radius: 13px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 22px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 500px) {
          .verify-code {
            margin: 0% 20%;
            background-color: #f0eff7;
            border-radius: 15px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 28px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 525px) {
          .verify-code {
            margin: 0% 20%;
            background-color: #f0eff7;
            border-radius: 15px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 30px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 550px) {
          .verify-code {
            margin: 0% 20%;
            background-color: #f0eff7;
            border-radius: 15px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 35px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 699px) {
          .verify-code {
            margin: 0% 22%;
            background-color: #f0eff7;
            border-radius: 20px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 38px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
        @media screen and (min-width: 799px) {
          .verify-code {
            margin: 0% 22%;
            background-color: #f0eff7;
            border-radius: 25px;
            align-content: center;
            padding: 2% 1%;
          }
          .verify-code p {
            margin: 0% auto;
            font-size: 44px;
            padding-left: 13%;
            font-weight: 700;
            letter-spacing: 1em;
            text-align: center;
            align-self: center;
          }
        }
      </style>
    </head>
    <body>
      <div style="display:block;max-width:800px;margin:auto;text-align:center">
        <div class="header">
        <img src="https://bucket-api-rpg.s3.sa-east-1.amazonaws.com/zuvialogo+(1).png" width="auto" height="40"
                  alt="zuvia.io">
        </div>
        <div style="padding:20px 4% 0 4%">
          <div style="text-align:center">
            <p style="font-size:24px">
              <strong>Código de verificação</strong>
            </p>
          </div>
          <div class="verify-code">
            <p><strong>${code}</strong></p>
          </div>
          <div style="text-align:center; color:#6B677C;">
            <p style="font-size:16px; padding-bottom: 2em; padding-top: 0.5em;">
              Atenção: não compartilhe esse código com ninguém
            </p>
          </div>
        </div>
        <div class="footer">
          <p style="font-size:16px">
            Caso não tenha solicitado nenhum código, por favor, ignore esse email.
          </p>
        </div>
      </div>
    </body>
  </html>`;
};
