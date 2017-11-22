const genrateGreeting=(name)=> `Hello ${name}!`;

test('should greet by name',()=>{
    const result=genrateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
}

);
