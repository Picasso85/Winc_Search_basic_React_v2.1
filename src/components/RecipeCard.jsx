import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

export const RecipeCard = function ({ recipe, setRecipe }) {
  const filterHealthLabels = recipe.recipe.healthLabels.filter((item) => {
    return item === "Vegan" || item === "Vegetarian"
  })
  console.log(filterHealthLabels)
  return (
    <Card
      onClick={() => setRecipe(recipe)}
      m={5}
      width="25rem"
      cursor="pointer"
      bgColor="whiteAlpha.600"
      borderStyle="solid"
      borderWidth="0.15rem"
      borderRadius="1rem"
      borderColor="gray"
      alignItems="center"
      textAlign="center"
    >
      <CardHeader pb={1}>
        <Heading
          size="md"
          as="u"
        >
          {recipe.recipe.label}
        </Heading>
      </CardHeader>
      <CardBody pt={1}>
        <Text
          fontSize="xl"
          align="center"
        >
          {recipe.recipe.mealType[0]}
        </Text>
        <Text
          mb={2}
          textAlign="center"
        >
          Dish: {recipe.recipe.dishType[0]}
        </Text>
        <Image
          src={recipe.recipe.image}
          margin="auto"
          boxSize="18rem"
          objectFit="cover"
          width="20rem"
          boxShadow="inner"
          p={0.5}
          m={2}
          bg="white"
          rounded="md"
          alt="Picture of recipe"
          borderRadius="10px"
        />
        <Flex justify="center">
          {filterHealthLabels.map((filteredItem) => (
            <Text
              bgColor="green.100"
              mt={2}
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              boxShadow="lg"
              m={2}
              p={0.5}
              rounded="md"
              key={filteredItem}
            >
              {filteredItem}
            </Text>
          ))}
        </Flex>
        <Flex justify="center">
          {recipe.recipe.dietLabels.map((item) => (
            <Text
              bgColor="aqua"
              mt={2}
              pl={1.5}
              pr={1.5}
              m={2}
              borderRadius="5px"
              boxShadow="lg"
              p={0.5}
              rounded="md"
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Text
          mt={2}
          textAlign="center"
          fontSize="lg"
        >
          Cautions:
        </Text>
        <Flex
          justify="center"
          wrap="wrap"
        >
          {recipe.recipe.cautions.map((item) => (
            <Text
              bgColor="darkorange"
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              m={1}
              boxShadow="lg"
              p={0.5}
              rounded="md"
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </CardBody>
    </Card>
  )
}
