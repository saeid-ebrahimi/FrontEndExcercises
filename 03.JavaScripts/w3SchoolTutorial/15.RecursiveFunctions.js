function rec_fact(term=1)
{
    if (term === 1)
        return 1
    else if (1 < term)
        return term * rec_fact(term-1)
    else
        return -1
}
