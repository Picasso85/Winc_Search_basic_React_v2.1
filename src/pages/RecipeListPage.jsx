import { Center, Heading, Flex, CardHeader } from "@chakra-ui/react"
import { data } from "../utils/data"
import { RecipeCard } from "../components/RecipeCard"

export const RecipeListPage = ({ setRecipe }) => {
  return (
    <>
      <Heading
        p={5}
        bgColor="slategray"
        color="whiteAlpha.600"
      >
        <Center>Winc Recipe Checker</Center>
      </Heading>

      <Flex
        bgColor="slategray"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {data.hits.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe}
            setRecipe={setRecipe}
          />
        ))}
      </Flex>
    </>
  )
}
