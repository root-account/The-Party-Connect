-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2022 at 07:08 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `party_connect`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments_reactions`
--

CREATE TABLE `comments_reactions` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `reaction_type` varchar(255) NOT NULL,
  `user_profile_link` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `direct_messages`
--

CREATE TABLE `direct_messages` (
  `id` int(11) NOT NULL,
  `message_to` varchar(255) NOT NULL,
  `message_from` varchar(255) NOT NULL,
  `message_text` text DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `direct_messages`
--

INSERT INTO `direct_messages` (`id`, `message_to`, `message_from`, `message_text`, `date_created`, `date_modified`) VALUES
(1, 'ephraim_1', 'pharrage_1', 'Hey man is the event happening?', '2022-07-23 21:31:37', '2022-07-23 21:31:37'),
(2, 'pharrage_1', 'ephraim_1', 'Yeah man the event is on.', '2022-07-23 21:31:37', '2022-07-23 21:31:37'),
(4, 'ephraim_1', 'pharrage_1', 'Thanks man, I cannot wait.', '2022-07-23 21:31:37', '2022-07-23 21:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `events_list`
--

CREATE TABLE `events_list` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `event_id` varchar(255) NOT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  `event_priority` varchar(255) DEFAULT NULL,
  `tittle` varchar(255) NOT NULL,
  `entrance_fee` varchar(255) DEFAULT NULL,
  `event_desc` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `venue` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `number_guests` varchar(255) DEFAULT NULL,
  `alcohol_allowed` varchar(255) DEFAULT NULL,
  `alcohol_pricing` varchar(255) DEFAULT NULL,
  `indoor_outdoor` varchar(255) DEFAULT NULL,
  `plus_ones` varchar(255) DEFAULT NULL,
  `parking_availability` varchar(255) DEFAULT NULL,
  `music_kind` varchar(255) DEFAULT NULL,
  `dress_code` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `social_hashtag` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `event_poster_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events_list`
--

INSERT INTO `events_list` (`id`, `user_id`, `event_id`, `category_id`, `event_type`, `event_priority`, `tittle`, `entrance_fee`, `event_desc`, `address`, `venue`, `start_date`, `end_date`, `number_guests`, `alcohol_allowed`, `alcohol_pricing`, `indoor_outdoor`, `plus_ones`, `parking_availability`, `music_kind`, `dress_code`, `contact_number`, `email_address`, `social_hashtag`, `date_created`, `date_modified`, `event_poster_url`) VALUES
(1, 'ephraim_1', 'ephraim_1_event_1', 'car-event', 'cars', NULL, 'Stance Fest 2022', 'R200', 'Come experience the baddest cars in South Afric', 'Jackal Creek Golf Estate', 'Jackal Creek Golf Estate', '2022-07-30 20:11:56', '2022-07-30 00:11:56', '200', 'yes', 'Bring own alcohol', 'Outdoors', 'As many as possible', '200 spaces', NULL, 'Just be you', '0123456789', 'mekgwele@gmail.com', '#stacefest2022', '2022-07-16 20:11:56', '2022-07-16 20:11:56', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/275244154_5671508402864430_7976692900597577382_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-7&_nc_sid=ed5ff1&efg=eyJpIjoidCJ9&_nc_eui2=AeHoEW_03OYffpaiglDf8CY0V2oESYxIAHxXagRJjEgAfK_bzs-Vi_jpScWinTaw4xBwx3XqjjY1nkpYAKyBcLCU&_nc_ohc=6RNKRLG2wa0AX_g1YDo&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8RQtfj5zEyvCPzPZJuilfTVWM1MpcJzBG63cCNwJLM9w&oe=62D8E04B'),
(2, 'ephraim_1', 'ephraim_1_event_2', 'music', 'music', 'featured', 'Get your groove back', 'Free', 'Musoc event', '', 'Rosebank Mall', '2022-08-12 00:00:00', '2022-08-12 00:00:00', '5', 'yes', 'Bring your own', 'outdoor', '6', '100', 'Hip Hop', 'Anything goes', '', 'mekgwele@gmail.com', '#thatnika', '2022-07-17 00:00:00', '2022-07-17 00:00:00', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/293673154_5765252723484954_3035608202258779051_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeHcvAfbxxAiw5bhv9D8lYuz0UF72XmY6RzRQXvZeZjpHAnTz9A9zcfaQOJ2BH1JuDiuuCh9lNqTWiEjVjQDhd-9&_nc_ohc=EJ0BL5quijsAX_FH46t&tn=pdoBNsWrtu_mz2Fw&_nc_ht=scontent-jnb1-1.xx&oh=00_AT_G9FEf9NkFG0O9CHh3U3ycAeyRdcapp1RaF5c9FuhDcQ&oe=62D87A2A'),
(3, 'ephraim_1', 'ephraim_1_event_3', 'music', 'music', 'promo', 'Get your groove back', 'R100', 'Musoc event', '', 'Witbank', '2022-08-12 00:00:00', '2022-08-12 00:00:00', '5', 'yes', 'Bring your own', 'outdoor', '6', '100', 'Hip Hop', 'Anything goes', '', 'mekgwele@gmail.com', '#thatnika', '2022-07-17 00:00:00', '2022-07-17 00:00:00', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/293643878_5768291833181043_8741763544827205963_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeH85PQim-WQajk03OpdS5OKtn5x1JvPr9i2fnHUm8-v2FhIBTql5A09tKfdk16fIWGkp62LYNnaAU9-B3Pp4l4V&_nc_ohc=LTgkHBsObQwAX97P0Jc&_nc_ht=scontent-jnb1-1.xx&oh=00_AT_0xnc6GvDtNCoX55hPnx3SDDYHYxy7tNqJudNcfc5UbA&oe=62D96C03'),
(4, 'ephraim_1', 'ephraim_1_event_4', 'music', 'music', NULL, 'Get your groove back', 'R300', 'Musoc event', '', 'Sandton City', '2022-08-12 00:00:00', '2022-08-12 00:00:00', '5', 'yes', 'Bring your own', 'outdoor', '6', '100', 'Hip Hop', 'Anything goes', '', 'mekgwele@gmail.com', '#thatnika', '2022-07-17 00:00:00', '2022-07-17 00:00:00', 'https://d1as2iufift1z3.cloudfront.net/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnFnIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0f0be00a3b72869a6358aa9d4eb63cd0639c349/37a7be58-b5a8-4916-a693-760c5e03a954.jpg?proxy=true');

-- --------------------------------------------------------

--
-- Table structure for table `event_comments`
--

CREATE TABLE `event_comments` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `event_id` varchar(255) NOT NULL,
  `comment_title` varchar(255) NOT NULL,
  `comment_text` text NOT NULL,
  `reply_to` varchar(255) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_comments`
--

INSERT INTO `event_comments` (`id`, `user_id`, `event_id`, `comment_title`, `comment_text`, `reply_to`, `date_created`, `date_modified`) VALUES
(1, 'pharrage_1', 'ephraim_1_event_1', 'It\'s about to go down.', 'This is going to be one epic party I tell you', '', '2022-07-17 17:35:11', '2022-07-17 17:35:11'),
(2, 'pharrage', 'ephraim_1_event_2', 'Going!', 'We\'ll be there to party', '', '2022-07-17 17:35:11', '2022-07-17 17:35:11');

-- --------------------------------------------------------

--
-- Table structure for table `event_images`
--

CREATE TABLE `event_images` (
  `id` int(11) NOT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `image_url` text DEFAULT NULL,
  `image_path` text DEFAULT NULL,
  `date_created` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `invitations`
--

CREATE TABLE `invitations` (
  `id` int(11) NOT NULL,
  `event_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `invite_message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `event_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `notification_text` text DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rsvp`
--

CREATE TABLE `rsvp` (
  `id` int(11) NOT NULL,
  `event_id` varchar(255) NOT NULL,
  `host_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `event_title` varchar(255) NOT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `rsvp_type` varchar(255) DEFAULT NULL,
  `has_paid` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rsvp`
--

INSERT INTO `rsvp` (`id`, `event_id`, `host_id`, `user_id`, `event_title`, `user_fullname`, `rsvp_type`, `has_paid`, `date_created`) VALUES
(1, 'ephraim_1_event_1', 'ephraim_1', 'ephraim_1', '', '', 'going', 'yes', '2022-07-17 17:28:34'),
(2, 'ephraim_1_event_2', 'pharrage_1', 'pharrage_1', '', '', 'interested', 'yes', '2022-07-17 17:28:34'),
(3, 'ephraim_1_event_3', 'ephraim_1', 'ephraim_1', '', '', 'going', 'yes', '2022-07-17 17:28:34'),
(4, 'ephraim_1_event_4', 'pharrage_1', 'pharrage_1', '', '', 'interested', 'yes', '2022-07-17 17:28:34');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `account_type` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_phone_number` varchar(255) DEFAULT NULL,
  `full_names` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `about_me` text DEFAULT NULL,
  `interests` text DEFAULT NULL,
  `music_interests` text DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `facebook_link` varchar(255) DEFAULT NULL,
  `twitter_link` varchar(255) DEFAULT NULL,
  `instagram_link` varchar(255) DEFAULT NULL,
  `whatsapp_phone` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `profile_image_url` text DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `login_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `user_id`, `account_type`, `user_email`, `user_pass`, `user_phone_number`, `full_names`, `business_name`, `surname`, `about_me`, `interests`, `music_interests`, `date_of_birth`, `facebook_link`, `twitter_link`, `instagram_link`, `whatsapp_phone`, `location`, `profile_image_url`, `date_created`, `last_updated`, `last_login`, `login_token`) VALUES
(1, 'ephraim_1', 'Individual', 'mekgwele@gmail.com', NULL, '0123456789', 'Malose Ephraim', '', 'Kgwele', 'I\'m just a dude that like cars.', 'Cars, Music and good times', 'Hip Hop, House', NULL, '#', '#', '#', '0608667708', 'Jackal Creek Golf Estate', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/288113121_5243961005698831_2870734800203836506_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSyOVOdp2xJXKDuQK5Zrjs0CYtKUxZyVvQJi0pTFnJW5YJs-9AiPPSgJTGrdTOD9kmefuVLszItV9mpnf5kZw0&_nc_ohc=NPh_Ty9feZ8AX9yR6e_&_nc_ht=scontent-jnb1-1.xx&oh=00_AT-Dapj7smE3lqF7ARWgzXfiWliII9UOo04VgiAB8YnPZg&oe=62E15590', '2022-07-16 20:16:53', '2022-07-16 20:16:53', '2022-07-16 20:16:53', NULL),
(2, 'pharage_1', 'business', 'pharragetech@gmail.com', NULL, '01234647584', 'Pharrage Technologies', 'Pharrage', NULL, 'A tech Company', 'Tech', 'All of it', NULL, '', '', '', '', '#', 'https://explosivemedia.co.za/wp-content/uploads/2021/03/drawnlogored-1497995813-1-1-300x150.png', '2022-07-16 20:19:21', '2022-07-16 20:19:21', '2022-07-16 20:19:21', NULL),
(3, 'ephraim_2', 'ephraim_1_event_2', 'mekgwele2@gmail.com', '1992', '0123456789', 'Kevin', '', 'Bambarage', 'Just a chilled dude nje!', 'Just chilling', 'Hipidi hop', '1992-08-12', 'yes', 'Bring your own', 'outdoor', '01234563834', 'Jackal Creek', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/116807884_3264588313619874_1628777835479177282_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFYHtvlp7aLtFJZqVrdpKQkUg9uknLUIP1SD26SctQg_djWHgy_9Ik5sgIosQAzGjkGKqCKLRYEOI2_mYYZPIZB&_nc_ohc=RKeGQlnvxkUAX_f4iFh&_nc_ht=scontent-jnb1-1.xx&oh=00_AT_YLl2w4CIDx5rKTzAa4gHdrIbp5o_KMlzC7FcMyDmWTA&oe=63004E00', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '#thatnika'),
(4, 'ephraim_3', 'ephraim_1_event_2', 'mekgwele@gmail.com', '1992', '0123456789', 'Khutso Shalom', '', 'Mash', 'Just a chilled dude nje!', 'Just chilling', 'Hipidi hop', '1992-08-12', 'yes', '', '', '', 'Jackal Creek', 'data:image/jpeg;base64,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', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '#thatnika'),
(5, 'ephraim_1', 'ephraim_1_event_2', 'mekgwele@gmail.com', '1992', '0123456789', 'Will ', 'Explosive Media', 'The Man', 'Just a chilled dude nje!', 'Just chilling', 'Hipidi hop', '1992-08-12', 'yes', 'Bring your own', 'outdoor', '01234563834', 'Jackal Creek', 'https://media-exp1.licdn.com/dms/image/C4E0BAQHOQk42wbrNjg/company-logo_200_200/0/1519886779624?e=2147483647&v=beta&t=cvz8lhPRyBvQ3GetmPYGNoK3WD47AaTJYlD8haOcO6o', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '2022-07-17 00:00:00', '#thatnika');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments_reactions`
--
ALTER TABLE `comments_reactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `direct_messages`
--
ALTER TABLE `direct_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events_list`
--
ALTER TABLE `events_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_comments`
--
ALTER TABLE `event_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_images`
--
ALTER TABLE `event_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invitations`
--
ALTER TABLE `invitations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rsvp`
--
ALTER TABLE `rsvp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`user_email`,`user_phone_number`,`facebook_link`,`twitter_link`,`instagram_link`,`whatsapp_phone`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments_reactions`
--
ALTER TABLE `comments_reactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `direct_messages`
--
ALTER TABLE `direct_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events_list`
--
ALTER TABLE `events_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `event_comments`
--
ALTER TABLE `event_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `event_images`
--
ALTER TABLE `event_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invitations`
--
ALTER TABLE `invitations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rsvp`
--
ALTER TABLE `rsvp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
