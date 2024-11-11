package com.playhunt.PlayHuntPhrases.service;

import com.playhunt.PlayHuntPhrases.dto.PhraseDTO;
import com.playhunt.PlayHuntPhrases.model.Phrase;
import com.playhunt.PlayHuntPhrases.repository.PhraseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhraseService {

    @Autowired
    PhraseRepository phraseRepository;

    public PhraseDTO getRandomPhrase(){

        Phrase phrase = phraseRepository.getRandomPhrase();

        return new PhraseDTO(phrase.getId(), phrase.getPhrase(), phrase.getGame(), phrase.getCharacter(), phrase.getImage());

    }


}
