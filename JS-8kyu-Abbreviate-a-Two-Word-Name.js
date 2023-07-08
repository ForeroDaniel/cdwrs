export function abbrevName(name: string): string {
    const splitName = name.toUpperCase().split(' ');
    return `${splitName[0][0]}.${splitName[1][0]}`;
}
