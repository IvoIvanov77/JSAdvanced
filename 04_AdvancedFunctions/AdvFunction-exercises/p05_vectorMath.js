/**
 * Created by Ivaylo on 5/20/2018.
 */

let solution = (function() {
    return {
        add :  (vec1, vec2) => {return [vec1[0] + vec2[0], vec1[1] + vec2[1]] },
        multiply :  (vec1, num) =>{return [vec1[0] * num, vec1[1] * num]},
        length :  (vec) => {return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1])},
        dot :  (vec1, vec2) => {return vec1[0] * vec2[0] + vec1[1] * vec2[1]},
        cross :  (vec1, vec2) => {return vec1[0] * vec2[1] - vec1[1] * vec2[0]}
    }
})();


console.log(solution.add([1, 1], [1, 0]));
