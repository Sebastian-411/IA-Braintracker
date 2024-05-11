import React from "react";
import { htmlToText } from "html-to-text";
import MarkdownIt from "markdown-it";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const downloadPDF = (markdownString) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
