function solution(name, yearning, photo) {
    const nameToYearningMap = {}
    name.forEach((person,index)=>{nameToYearningMap[person]=yearning[index]})
    return photo.map(names=>names.reduce((a,b)=>a + nameToYearningMap[b] || a,0));
}