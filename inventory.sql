-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Nov 2020 pada 15.51
-- Versi server: 10.3.15-MariaDB
-- Versi PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `location_id` int(8) NOT NULL,
  `type` varchar(20) NOT NULL COMMENT 'inbound=masuk, outbound=keluar',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `adjustment` double NOT NULL,
  `quantity` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `logs`
--

INSERT INTO `logs` (`id`, `location_id`, `type`, `created_at`, `adjustment`, `quantity`) VALUES
(24, 1, 'Outbond', '2020-11-17 19:10:36', -20, 130),
(25, 1, 'Outbond', '2020-11-17 19:41:11', -20, 110),
(26, 1, 'Outbond', '2020-11-17 19:45:29', -20, 90),
(27, 1, 'Outbond', '2020-11-17 19:46:21', -20, 70),
(28, 2, 'Inbound', '2020-11-17 19:46:21', 10, 400),
(29, 1, 'Inbound', '2020-11-17 20:01:32', 50, 120),
(30, 2, 'Outbond', '2020-11-17 20:01:32', -80, 320),
(31, 1, 'Inbound', '2020-11-17 20:15:53', 50, 170),
(32, 2, 'Outbond', '2020-11-17 20:15:53', -80, 240),
(33, 2, 'Outbond', '2020-11-17 20:17:54', -80, 160),
(34, 2, 'Outbond', '2020-11-17 21:14:16', -80, 80),
(35, 1, 'Inbound', '2020-11-17 21:23:21', 50, 220),
(36, 2, 'Outbond', '2020-11-17 21:23:21', -10, 70);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `location` varchar(10) NOT NULL,
  `quantity` int(8) NOT NULL,
  `product` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `location`, `quantity`, `product`, `created_at`, `updated_at`) VALUES
(1, 'A-1-1', 220, 'Mie Aceh', '2020-11-17 20:40:09', '2020-11-17 21:23:21'),
(2, 'A-1-2', 70, 'White Coffe ', '2020-11-17 20:40:09', '2020-11-17 21:23:21');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
