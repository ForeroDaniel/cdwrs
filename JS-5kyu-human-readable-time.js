function humanReadable (seconds) {
  const hrs = `${Math.trunc(seconds / 3600)}`.padStart(2,'0')
  const mins = `${Math.trunc((seconds % 3600) / 60)}`.padStart(2,'0')
  const secs = `${seconds % 60}`.padStart(2,'0')
  return `${hrs}:${mins}:${secs}`
}
