import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './PaginationStyling';

const Pagination = props => {
  const {currentPage, totalPages} = props;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      props.onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      props.onPageChange(currentPage + 1);
    }
  };

  return (
    <View style={styles.paginationContainer}>
      <View style={styles.staticButtonsContainer}>
        {currentPage > 1 ? (
          <Pressable style={styles.nextPrev} onPress={handlePrevClick}>
            <Text style={styles.activatedText}>Prev</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.nextPrevDisabled} disabled={true}>
            <Text style={styles.activatedText}>Prev</Text>
          </Pressable>
        )}
        {currentPage > 2 && (
          <Pressable
            style={styles.dottedContainer}
            onPress={() => props.onPageChange(1)}>
            <Text>1</Text>
          </Pressable>
        )}
        {currentPage > 2 && <Text>...</Text>}
      </View>
      <View style={styles.dynamicButtonsContainer}>
        {currentPage !== 1 && (
          <Pressable
            onPress={() => props.onPageChange(Math.max(currentPage - 1, 1))}>
            <Text>{Math.max(currentPage - 1, 1)}</Text>
          </Pressable>
        )}
        <Pressable style={styles.activatedPage}>
          <Text style={styles.activatedText}>{currentPage}</Text>
        </Pressable>
        {currentPage < totalPages && (
          <Pressable
            onPress={() =>
              props.onPageChange(Math.min(currentPage + 1, totalPages))
            }>
            <Text>{Math.min(currentPage + 1, totalPages)}</Text>
          </Pressable>
        )}
        {currentPage === 1 && (
          <Pressable
            onPress={() => props.onPageChange(Math.max(currentPage - 1, 1))}>
            <Text>{Math.min(currentPage + 2, totalPages)}</Text>
          </Pressable>
        )}
      </View>
      {currentPage < totalPages ? (
        <View style={styles.nextContainer}>
          {currentPage < totalPages ? (
            <Pressable style={styles.nextPrev} onPress={handleNextClick}>
              <Text style={styles.activatedText}>Next</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.nextPrevDisabled} disabled={true}>
              <Text style={styles.activatedText}>Next</Text>
            </Pressable>
          )}

          {currentPage + 1 < totalPages && (
            <Pressable
              style={styles.dottedContainer}
              onPress={() => props.onPageChange(10)}>
              <Text>{totalPages}</Text>
            </Pressable>
          )}
          {currentPage + 1 < totalPages - 1 && (
            <Text style={{marginHorizontal: 15}}>...</Text>
          )}
        </View>
      ) : (
        <View style={styles.nextContainer}>
          <Pressable style={styles.nextPrevDisabled} disabled={true}>
            <Text style={styles.activatedText}>Next</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Pagination;
