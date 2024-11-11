package com.playhunt.PlayHuntPhrases.repository;

import com.playhunt.PlayHuntPhrases.model.Phrase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PhraseRepository extends JpaRepository<Phrase, Long> {

    @Query("select p from Phrase p order by function('random') limit 1")
    Phrase getRandomPhrase();
}
