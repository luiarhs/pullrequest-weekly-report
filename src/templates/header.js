'use strict';

let header = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <style type="text/css">
    body,p,
    div {
      font-family: inherit;
      font-size: 14px;
    }
    body {
      color: #0033a0;
    }
    body a {
      color: #0033a0;
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <link href="https://fonts.googleapis.com/css?family=Viga&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Viga', sans-serif;
    }
  </style>
</head>

<body>
  <center class="wrapper" data-link-color="#1188E6"
    data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#f0f0f0;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
        <tr>
          <td valign="top"  width="100%">
            <table width="100%" role="content-container" class="outer" data-wrapper-width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td width="100%">
                  <table width="100%" bgcolor="#cc26b0" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding:16px 32px; line-height:40px; text-align:inherit;">
                        <h1>Weekly Summary ${data.name}</h1>
                        <h3 style="color: #ffffff;">Here is a summary of the pull requests that were created in the last week.</h3>
                      </td>
                    </tr>
                    
                  </table>
                  <table class="divider-content" role="content-container" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr style="color: #415364;">
                      <td style="padding:10px;"><strong>Title</strong></td>
                      <td style="padding:10px;"><strong>Author</strong></td>
                      <td style="padding:10px;"><strong>State</strong></td>
                      <td style="padding:10px;"><strong>Created At</strong></td>
                      <td style="padding:10px;"><strong>View it on GitHub</strong></td>
                    </tr>
                  </table>
                  <tr>
                    <td style="padding:0px 0px 3px 0px;" bgcolor="#cc26b0"></td>
                  </tr>
                  <table class="divider-content" role="content-container" cellspacing="0" cellpadding="0" border="0" width="100%">`;

module.exports = header;