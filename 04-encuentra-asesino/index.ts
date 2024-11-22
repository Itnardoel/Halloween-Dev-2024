export function findTheKiller(whisper: string, suspects: string[]) {
  const isWhisperEndsWith$ = whisper.endsWith('$')
  const replacedWhisper = whisper.replace(/~/g, ".")
  const endOfWhisper = isWhisperEndsWith$ ? '$' : '.*$'
  
  const regex = new RegExp (`^${replacedWhisper}${endOfWhisper}`, 'i')

  const matchingSuspects = suspects.filter((suspect) => regex.test(suspect))

  return matchingSuspects.join(',')
}