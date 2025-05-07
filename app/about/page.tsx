import "./styles.css";
export default function AboutPage() {
  const formatTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const hour = String(today.getHours()).padStart(2, "0");
    const minute = String(today.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}${month}${day}${hour}${minute}`;
    return formattedDate;
  };

  const apkUrl = "/static/app-release.apk";
  const downloadFileName = `app-release-${formatTodayDate()}.apk`;

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-emerald-900 to-fuchsia-700 text-white"
      style={{
        textAlign: "center",
        padding: "50px",
        height: "100%",
      }}
    >
      <h1 className="font-bold text-5xl">FOT App</h1>
      <p className="mt-5 mb-5 text-amber-50 text-2xl">
        Click the button below to download and install our app.
      </p>
      <a href={apkUrl} download={downloadFileName}>
        <button className="gradient-button">Android App Download (APK)</button>
      </a>
      <p className="mt-10">
        Note: Make sure you have enabled installations from unknown sources on
        your device.
      </p>
    </div>
  );
}
