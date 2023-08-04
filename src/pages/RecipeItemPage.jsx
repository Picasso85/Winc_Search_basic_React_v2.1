import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react"

export const RecipeItemPage = ({ recipe, backBtn }) => {
  return (
    <>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 30vw 30vw 1fr",
        }}
        justifyItems="start"
        justifyContent="center"
        bg="snow.100"
        h="100vh"
      >
        <GridItem
          p={5}
          w="auto"
          bg="snow.100"
          colStart={{ lg: "2" }}
          colEnd={{ lg: "3" }}
        >
          <Flex
            justify="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => backBtn()}
              size="md"
              mt={2}
              mb={2}
              mr={2}
              colorScheme="blue"
            >
              Back
            </Button>
            <Heading
              size="md"
              color="slategray"
              textAlign="center"
              m="auto"
              pb={2}
            >
              {recipe.recipe.label}
            </Heading>
          </Flex>
          <Image
            width="full"
            height="20em"
            objectFit="cover"
            borderRadius={20}
            boxShadow="md"
            p={0.5}
            rounded="md"
            bg="gray.400"
            src={recipe.recipe.image}
            alt="picture of recipe"
          />

          <Text
            mt={2}
            mb={2}
            decoration="underline"
            textTransform="uppercase"
            fontSize="lg"
          >
            {recipe.recipe.dishType[0]}
          </Text>
          <Text>Total Cooking Time: {recipe.recipe.totalTime} minutes</Text>
          <Text mb={3}>Servings: {recipe.recipe.yield}</Text>
          <Heading
            mb={2}
            fontSize="sm"
          >
            Ingredients:
          </Heading>
          <Flex flexDir="column">
            {recipe.recipe.ingredientLines.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem
          p={5}
          w="auto"
          bg="slategray"
          bs="xl"
          boxShadow="lg"
        >
          <Heading
            mb={3}
            fontSize="xl"
            color="whiteAlpha.800"
          >
            Health labels:
          </Heading>
          <Flex
            justify="flex-start"
            wrap="wrap"
          >
            {recipe.recipe.healthLabels.map((item) => (
              <Text
                bgColor="ButtonShadow"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius=".5rem"
                boxShadow="lg"
                p={0.5}
                rounded="md"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading
            mb={3}
            fontSize="xl"
            color="whiteAlpha.800"
          >
            Diet:
          </Heading>
          <Flex
            justify="flex-start"
            wrap="wrap"
          >
            {recipe.recipe.dietLabels.map((item) => (
              <Text
                bgColor="aqua"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius=".5rem"
                boxShadow="lg"
                p={0.5}
                rounded="md"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading
            mb={3}
            fontSize="xl"
            color="whiteAlpha.800"
          >
            Cautions:
          </Heading>
          <Flex
            justify="flex-start"
            wrap="wrap"
          >
            {recipe.recipe.cautions.map((item) => (
              <Text
                bgColor="darkorange"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius=".5rem"
                boxShadow="lg"
                p={0.5}
                rounded="md"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading
            mb={3}
            fontSize="xl"
            color="whiteAlpha.800"
          >
            Total nutrients:
          </Heading>
          <Flex wrap="wrap">
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="red"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Calories:{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </Text>
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="blackAlpha.700"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Protein:{" "}
              {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
            </Text>
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="blackAlpha.700"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
            </Text>
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="blackAlpha.700"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Carbs: {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "}
              g
            </Text>
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="red"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Cholesterol:{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
            </Text>
            <Text
              mr={3}
              bgColor="whiteAlpha.700"
              color="blackAlpha.700"
              mb={3}
              pl={1.5}
              pr={1.5}
              borderRadius=".5rem"
              boxShadow="base"
              p={0.5}
              rounded="md"
              bg="gray.400"
            >
              Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}
