"""
   subsequence is a sequence derived from another sequence 
   deleting some or no elements of the parent sequence
   without changing the order of the elements
"""

def validate_subsequence(sequence, subsequence):
    pt_seq = 0
    pt_subseq = 0
    while pt_seq < len(sequence) and pt_subseq < len(subsequence):
        if sequence[pt_seq] == subsequence[pt_subseq]:
            pt_subseq += 1
        pt_seq += 1
    return pt_subseq == len(subsequence)
