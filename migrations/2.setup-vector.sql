-- Bikin fungsi baru di database
-- dibawah ini adalah fungsi yang dibuat 
-- dimana menerima 3 parameter input
-- 1. Query Embedding : representasi vektor dari teks yang dicari nantinya, biasanya dihasilkan oleh modelnya
-- 2. threshold : nilai batas bawah yang diatur dengan kemiripan
-- 3. match_count : jumlah data yang ingin dikembalikan 

CREATE OR REPLACE FUNCTION match_transactions
(
    query_embedding vector(768),
    match_threshold float, 
    match_count int
)

RETURNS TABLE (
    id uuid,
    type text,
    category text,
    amount numeric,
    description text,
    date date,
    user_id uuid,
    similarity float
)

LANGUAGE sql STABLE
AS $$
    SELECT
        transactions.id,
        transactions.type,
        transactions.category,
        transactions.amount,
        transactions.description,
        transactions.date,
        transactions.user_id,
        1 - (transactions.embedding <=> query_embedding) AS similarity
    FROM transactions
    WHERE 1 - (transactions.embedding <=> query_embedding) > match_threshold
    ORDER BY transactions.embedding <=> query_embedding
    LIMIT match_count;
$$;