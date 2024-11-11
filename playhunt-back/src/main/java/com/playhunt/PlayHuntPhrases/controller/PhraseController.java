package com.playhunt.PlayHuntPhrases.controller;


import com.playhunt.PlayHuntPhrases.dto.PhraseDTO;
import com.playhunt.PlayHuntPhrases.service.PhraseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/games")
public class PhraseController {

    @Autowired
    PhraseService phraseService;

    @GetMapping("/phrases")
    public PhraseDTO phraseRandom(){
        return phraseService.getRandomPhrase();
    }


}
