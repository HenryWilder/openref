interface Taxonomy {
    /** Common name */
    commonName: string;

    /** Not exhaustive */
    scientificName: {
        domain?: string;
        kingdom?: string;
        phylum?: string;
        class?: string;
        order?: string;
        family?: string;
        genus?: string;
        species?: string;
        subSpecies?: string;
        race?: string;
    };

    isFictional: boolean;
}

/**
 * The traits of a character's personality or metadata about the character.
 */
interface Traits {
    [name: string]: any;
}

/**
 * A standard set of traits that can be used for generally expected basic trait information.
 */
interface StandardTraits extends Traits {
    firstname?: string;
    lastname?: string;
    name?: string;

    age?: number;
    dob?: Date;

    taxonomy?: Taxonomy;
    nicknames?: { [user: string]: string[] } | string[];
    personality?: string[];
}

interface Transform {

}

/**
 * A part of a character's body.
 */
interface Feature {
    /**
     * The {@link baseFeatures}-key of the {@link AbstractFeature} this feature is based on.
     */
    baseFeature?: string;

    transform?: Transform;

    [item: string]: Feature | Feature[] | string | number | boolean | Transform | undefined;
}

interface AbstractFeature extends Feature {}

/**
 * Abstract features are partial features can be cloned or reused as bases by other features.
 */
const baseFeatures: { [key: string]: Feature } = {};

/**
 * Definitions for abstract parts of a character.
 * @link baseFeatures
 * 
 * For example:
 * - Reuseable colors
 * - symmetrical features
 * - etc.
 */
interface CharacterHeader {
    [key: string]: Feature
}

/**
 * Definitions for expressable parts of a character.
 * 
 * For example:
 * - Size of hands
 * - Colored eyes
 * - etc.
 */
interface CharacterBody {

}

/**
 * The full definition of a character.
 */
interface Character {
    /**
     * Abstract features of a character. Are not expressed unless used in {@link Character.body|body}.
     */
    header: CharacterHeader;

    /**
     * Expressed features of a character. Can reuse featured declared in {@link Character.header|header}.
     */
    body: CharacterBody;

    /**
     * The traits of a character's personality; or metadata about the character.
     */
    traits: Traits;
}
