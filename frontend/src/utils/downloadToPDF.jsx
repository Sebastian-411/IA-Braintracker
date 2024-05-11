import React from "react";
import { htmlToText } from "html-to-text";
import MarkdownIt from "markdown-it";
import pdfMake from "pdfmake/build/pdfmake";

export const downloadPDF = (markdownString) => {
  pdfMake.fonts = {
    Roboto: {
      normal:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
      bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
      italics:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
      bolditalics:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
    },
  };

  const md = new MarkdownIt();
  const htmlString = md.render(markdownString);
  const textString = htmlToText(htmlString, {
    wordwrap: 130,
  });

  const docDefinition = {
    content: [
      {
        text: textString,
        style: "body",
      },
    ],
    styles: {
      body: {
        fontSize: 12,
        bold: false,
      },
    },
  };

  pdfMake.createPdf(docDefinition).download("results.pdf");
};
