export class RegexUtil{
    static isNumeric(testString:string):boolean {
        const regex = /^\d+$/;
        return regex.test(testString);
    }
}