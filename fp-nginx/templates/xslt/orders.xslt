<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:key name="orders-by-category" match="order" use="@category" />

    <xsl:template match="/">
        <div>
            <h1>Stats by this <xsl:value-of select="/orders/@time"/></h1>
                <!-- //student[count(. |  key('students-by-group', @group)[1] ) = 1 -->
                <!-- //student[@group=9] -->
                <h2>Total orders:<xsl:value-of select="count(//order)"/></h2>

                <xsl:apply-templates select="//order[generate-id(.) = generate-id(key('orders-by-category', @category)[1] )]"/>
        </div>
    </xsl:template>

    <xsl:template match="order">
        <h2>Tea <xsl:value-of select="@category"/></h2>
        <h3>Total: <xsl:value-of select="count(//order[@category = current()/@category])"/></h3>
        <ul>
            <xsl:apply-templates select="key('orders-by-category', @category)" mode="grouping"/>
        </ul>
    </xsl:template>

    <xsl:template match="order" mode="grouping">
        <li><xsl:value-of select="@date"/> -
            <xsl:value-of select="@product"/>
        </li>
    </xsl:template>

</xsl:stylesheet>