package com.playhunt.PlayHuntPhrases.dto;

public record PhraseDTO(
        Long id,
        String phrase,
        String game,
        String character,
        String img
) {
}
