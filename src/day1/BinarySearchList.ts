export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    let midpoint = low + (high - low) / 2;
    let value = haystack[midpoint];
    
    do {    
        if ( value === needle ) {
            return true;
        } else if ( needle > value ) {
            low = midpoint + 1
        } else {
            high = midpoint;
        }
        return false;
    } while (low < high);    
}