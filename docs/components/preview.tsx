function PreviewJpage() {
  return (
    <iframe
      height={400}
      style={{width: "100%"}}
      scrolling="no"
      title="JPage - Docs"
      src="https://codepen.io/ss-pedroisac/embed/wvPGqPV?default-tab=html%2Cresult"
      frameBorder="no"
      loading="lazy">
    </iframe>
  )
}

export default function MyApp() {
  return <PreviewJpage />
}
