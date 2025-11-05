/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `service` (text) - Type of service requested
      - `message` (text) - Additional message or details
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public inserts (anyone can submit a contact form)
    - No read policies needed as this is admin-only data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);