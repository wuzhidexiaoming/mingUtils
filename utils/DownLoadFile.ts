export function DownloadFile({
  data,
  fileName,
}: {
  data: Blob;
  fileName: string;
}) {
  return new Promise((resolve) => {
    if (data.type === "application/json") {
      data.text().then((buffer) => {
        const data = JSON.parse(buffer);
        resolve({ errMsg: data.message });
      });
    } else {
      const blob = new Blob([data]);
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
      resolve({ url });
    }
  });
}
