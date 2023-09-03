export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    do {    
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];
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