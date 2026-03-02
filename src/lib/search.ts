
// Helper: Pre-compile Regex patterns
export const PATTERNS = {
    GEAR: /(\d+)\s*teeth/i,
    BOLT: /(m(\d+(?:\.\d+)?))\s*(hex)?\s*bolt.*?(\d+)\s*mm\s*length/i,
    ACTUATOR: /linear actuator.*?(\d+)\s*mm\s*stroke/i,
    CLEANUP: /^(design|create|build|make|show|give|generate|draw|render|find|search|please|can you|show me|give me|make me|draw me|build me|create a|design a|make a|show a|find a|search for|look for|display|render).*?(a|an|the)?\s*/i,
    SUFFIX: /s$/i
};

export const STOP_WORDS = new Set(['design', 'create', 'build', 'make', 'show', 'give', 'generate', 'draw', 'render', 'find', 'search', 'model', 'component', 'part', 'a', 'an', 'the', 'with', 'for', 'of', 'in', 'on', 'at', 'to', 'is', 'are', 'hi', 'hey', 'hello', 'please', 'ok', 'thanks']);

export const preprocessQuery = (query: string): string => {
    return query
        .toLowerCase()
        .replace(PATTERNS.CLEANUP, '')
        .replace(PATTERNS.SUFFIX, '')
        .trim();
};
