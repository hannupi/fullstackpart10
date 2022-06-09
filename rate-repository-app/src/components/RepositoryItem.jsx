import { StyleSheet, View, Image, } from "react-native";
import theme from "../theme";
import Text from "./Text";
import InfoComponent from "./InfoComponent";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
    },
    headerContainer: {
        flexDirection: 'row',
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginLeft: 5,
        marginTop: 5,
    },
    fullName: {
        paddingLeft: 6,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,
    },
    description: {
        color: theme.colors.textSecondary,
        marginLeft: 6,
    },
    languageTag: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 5,
        paddingBottom: 4,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: "flex-start",
    },

})

const RepositoryItem = ({ fullName, description, language, forksCount, stars, ratingAverage, reviewCount, avatar }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={{ uri: avatar }} style={styles.avatar}></Image>
                    <View>
                        <Text style={styles.fullName}>{fullName}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.languageTag}>{language}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <InfoComponent infoNumber={stars} infoText="Stars" />
                    <InfoComponent infoNumber={forksCount} infoText="Forks" />
                    <InfoComponent infoNumber={reviewCount} infoText="Reviews" />
                    <InfoComponent infoNumber={ratingAverage} infoText="Rating" />
                </View>
            </View>
        </>
    );
};

export default RepositoryItem;