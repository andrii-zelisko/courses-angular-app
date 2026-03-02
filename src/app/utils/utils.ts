export function padZero(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export function formatCreationDate(date: string | Date): string {
  const d = new Date(date);

  return `${padZero(d.getMonth() + 1)}.${padZero(d.getDate())}.${d.getFullYear()}`;
}

export function generateUUID(): string {
  if (crypto?.randomUUID) {
    return crypto.randomUUID(); // preferred modern way
  }

  let d = Date.now();
  let d2 = performance?.now?.() ?? 0;

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16;

    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }

    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export function getCourseDuration(duration: number): string {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${padZero(hours)}:${padZero(minutes)} ${hours === 1 ? 'hour' : 'hours'}`;
}

export function getCurrentDateFormatted(): string {
  const date = new Date();

  return `${padZero(date.getMonth() + 1)}/${padZero(date.getDate())}/${date.getFullYear()}`;
}
