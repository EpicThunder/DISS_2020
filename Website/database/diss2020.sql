DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS player_partial;

CREATE TABLE player (
  p_id INTEGER PRIMARY KEY,
  p_uuid TEXT UNIQUE NOT NULL,
  p_default_first INTEGER NOT NULL,
  p_age TEXT NOT NULL,
  p_language TEXT NOT NULL,
  p_play_games TEXT NOT NULL,
  p_favorite_genre TEXT,
  p_important_narrative INTEGER,
  p_deq TEXT NOT NULL,
  p_affective_profile TEXT NOT NULL,
  p_logs_1 TEXT NOT NULL,
  p_logs_2 TEXT NOT NULL,
  p_game_exp_core_module_1 TEXT NOT NULL,
  p_game_exp_core_module_2 TEXT NOT NULL,
  p_post_game_opinion_1 TEXT,
  p_post_game_opinion_2 TEXT,
  p_open_answer_game_exp_1 TEXT,
  p_open_answer_game_exp_2 TEXT,
  p_main_character_opinion_1 TEXT,
  p_main_character_opinion_2 TEXT,
  p_version_liked_most TEXT NOT NULL,
  p_open_answer_version_liked_most TEXT,
  p_version_reflected_most TEXT NOT NULL,
  p_open_answer_version_reflected_most TEXT,
  p_games_like_this_in_the_future TEXT NOT NULL,
  p_open_answer_games_like_this_in_the_future TEXT,
  p_suggestions TEXT
);

CREATE TABLE player_partial (
  p_id INTEGER PRIMARY KEY,
  p_uuid TEXT UNIQUE NOT NULL,
  p_default_first INTEGER NOT NULL,
  p_age TEXT NOT NULL,
  p_language TEXT NOT NULL,
  p_play_games TEXT NOT NULL,
  p_favorite_genre TEXT,
  p_important_narrative INTEGER,
  p_deq TEXT NOT NULL,
  p_affective_profile TEXT NOT NULL,
  p_logs_1 TEXT NOT NULL,
  p_game_exp_core_module_1 TEXT NOT NULL,
  p_post_game_opinion_1 TEXT,
  p_open_answer_game_exp_1 TEXT,
  p_main_character_opinion_1 TEXT
);