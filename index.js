


class RecipeFood  {
    constructor(name,IngrList,descr,cookingTime){
        this.name = name
        this.IngrList = IngrList
        this.descr = descr
        this.cookingTime = cookingTime
        this.isValid = this.#isValidRecipe()
    }

    #isValidRecipe () {
        const name = typeof this.name === 'string' && this.name.trim();
        const list = Array.isArray(this.IngrList) && this.IngrList.length > 0;
        const descr = typeof this.descr === 'string' && this.descr.trim();
        const time = typeof this.cookingTime === 'number' && this.cookingTime > 0;
        return name && list && descr && time
    }

}

class BookOfRecipe {
    #Recipe = [];

    addRecipe(Recipe) {
        Recipe.isValid
            ? this.#Recipe.push(Recipe)
            : console.log("Recipe not valid");
    }
    getRecipe() {
        return this.#Recipe;
    }
    findRecipesByTime(maxTime) {
        const matchingRecipes = this.#Recipe.filter(recipe => recipe.cookingTime <= maxTime);
        return matchingRecipes;
    }
    findRecipesByIngredients() {
        const arg = Array.from(arguments);
        const matchingRecipes = this.#Recipe.filter((recipe) => {
            return arg.every((Element )=> {              //На майбутнє завжди дивись де потрібно встановлювати return 
                return recipe.IngrList.includes(Element);//бо filter та every  хочуть отримувати буліве значення.Ти на це витратив 5 годин...
            });
        });
        return matchingRecipes;
    }
}



const recipe1 = new RecipeFood('Borscht', ['potato', 'carrot', 'onion', 'beetroot'], 'Wonderful dish', 30);
const recipe2 = new RecipeFood('Cabbage Rolls', ['cabbage', 'rice', 'pork'], 'Delicious and easy to make', 60);
const recipe3 = new RecipeFood('Pilaf', ['rice', 'chicken', 'carrot', 'beet'], 'Try this variation', 120);
const recipe4 = new RecipeFood('Caesar Salad', ['lettuce', 'chicken', 'tomato', 'cheese'], 'Light and tasty', 45);
const recipe5 = new RecipeFood('Fruit Cocktail', ['apple', 'banana', 'orange'], 'Vitamin boost', 15);
const recipe6 = new RecipeFood('trash', ['uzzy', 'xxx', 'rust'], 'unVitamin boost', 0);
const recipe7 = new RecipeFood("Potato with Carrot",["potato", "carrot", "salt", "spices"],"The simplest recipe for cooking potatoes with carrots.",45);
    

    
    

const myBook = new BookOfRecipe()





myBook.addRecipe(recipe1)
myBook.addRecipe(recipe2)
myBook.addRecipe(recipe3)
myBook.addRecipe(recipe4)
myBook.addRecipe(recipe5)
myBook.addRecipe(recipe6)
myBook.addRecipe(recipe7)

console.log('пошук страви за часом', myBook.findRecipesByTime(60))
console.log('пошук страви за інгридієнтами ', myBook.findRecipesByIngredients('potato', 'carrot') )



