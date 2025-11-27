declare module "pdf-parse" {
  interface PDFResult {
    text: string;
    info?: any;
    metadata?: any;
    version?: string;
    numpages?: number;
  }

  function pdfParse(data: Buffer | Uint8Array): Promise<PDFResult>;
  export = pdfParse;
}
