// import XLSX from 'xlsx';
import { read, utils } from 'xlsx';

const ParseExcel = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: 'array' });

      const sheetsData = [];
      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

        const tableData = jsonData[0][0];
        const headers = jsonData[1];
        const rows = jsonData.slice(2);

        const sheetData = {
          tabla: tableData,
          items: rows.map((row) => {
            const item = {};
            headers.forEach((header, index) => {
              item[header] = row[index];
            });
            return item;
          }),
        }

        sheetsData.push(sheetData);
      });

      resolve(sheetsData);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};

export default ParseExcel;
